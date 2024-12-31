const mongoose = require("mongoose");
const initData = require("./member.js");;
const Member = require("../models/memdata.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/GYM"

main().then(() => {
    console.log("connected to DB");
}).catch().catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Member.deleteMany({});
    await Member.insertMany(initData.member);
    console.log("Data was inserted");
};

initDB();