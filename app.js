const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const Listing = require("./models/listings.js");
const Member = require("./models/memdata.js");
const { memberSchema, listingSchema } = require("./Schema.js");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const flash = require("connect-flash");



// MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/GYM";

async function main() {
    await mongoose.connect(MONGO_URL).catch(err => console.log("MongoDB connection error:", err));
    console.log("Connected to MongoDB");
}
main();

// Middleware
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    next();
});
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// / Validation Middleware
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Validation Middleware
const validateMember = (req, res, next) => {
    const { error } = memberSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Routes
app.get("/home", (req, res) => {
    res.render("./main/main.ejs");
});

app.get("/home/store", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("./main/index.ejs", { allListing });
}));

app.get("/home/admin/new", (req, res) => {
    res.render("./main/new.ejs");
});

app.get("/home/store/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./main/show.ejs", { listing });
}));

app.get("/home/admin/newproduct", (req, res) => {
    res.render("./main/product.ejs");
});

app.post("/home/admin/newproduct", wrapAsync(async (req, res) => {
    const newProduct = new Listing(req.body.listing);
    await newProduct.save();
    req.flash("success", "New listing Created");
    res.redirect("/listings/home/store");
}));

// Routes
app.get("/home/admin", (req, res) => {
    res.render("./main/admin.ejs");
});

app.get("/home/admin/member", wrapAsync(async (req, res) => {
    const allMember = await Member.find({});
    res.render("./main/member.ejs", { allMember });
}));

app.get("/home/admin/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const member = await Member.findById(id);
    res.render("./main/memdet.ejs", { member });
}));

app.get("/home/admin/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const member = await Member.findById(id);
    res.render("./main/editmem.ejs", { member });
}));

app.put("/home/admin/:id", validateMember, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedMember = req.body.member;
    await Member.findByIdAndUpdate(id, updatedMember, { new: true });
    res.redirect(`/members/home/admin/${id}`);
}));


app.get("/home/admin/new", (req, res) => {
    res.render("./main/new.ejs");
});

app.post("/home/admin/new", wrapAsync(async (req, res) => {
    const newMember = new Member(req.body.member);
    await newMember.save();


    res.redirect("/members/home/admin/member");
}));



app.delete("/home/admin/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    res.redirect("/members/home/admin/member");
}));
// Routes
app.get("/home/admin", (req, res) => {
    res.render("./main/admin.ejs");
});

app.get("/home/admin/member", wrapAsync(async (req, res) => {
    const allMember = await Member.find({});
    res.render("./main/member.ejs", { allMember });
}));

app.get("/home/admin/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const member = await Member.findById(id);
    res.render("./main/memdet.ejs", { member });
}));

app.get("/home/admin/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const member = await Member.findById(id);
    res.render("./main/editmem.ejs", { member });
}));

app.get("/home/admin/new", (req, res) => {
    res.render("./main/new.ejs");
});

app.post("/home/admin/new", wrapAsync(async (req, res) => {
    const newMember = new Member(req.body.member);
    await newMember.save();
    res.redirect("/members/home/admin/member");
}));

app.put("/home/admin/:id", validateMember, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedMember = req.body.member;
    await Member.findByIdAndUpdate(id, updatedMember, { new: true });
    req.flash("success", "Member Updated");
    res.redirect(`/members/home/admin/${id}`);
}));

app.delete("/home/admin/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    res.redirect("/members/home/admin/member");
}));

app.get("/signup",(req, res) => {
    res.render("./main/signup.ejs");
});

app.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to Cardio Fitness");
        res.redirect("/home");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));


// 404 Handler
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error Handler Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("./main/error.ejs", { message });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});