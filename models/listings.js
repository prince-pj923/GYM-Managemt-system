const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type:String
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type:String,
            default:"https://www.google.com/imgres?q=powder%20creatine&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61mQAPUdgmL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FOptimum-Nutrition-Micronized-Creatine-Powder%2Fdp%2FB0C4LRGMD3&docid=WGGsAF3A_gBWoM&tbnid=ddVaOA9j7TbMuM&vet=12ahUKEwixt5L17qSKAxUpR2cHHbbhMzoQM3oECGUQAA..i&w=716&h=1000&hcb=2&ved=2ahUKEwixt5L17qSKAxUpR2cHHbbhMzoQM3oECGUQAA",
            set: (v) => v === "" ? "https://www.google.com/imgres?q=powder%20creatine&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61mQAPUdgmL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FOptimum-Nutrition-Micronized-Creatine-Powder%2Fdp%2FB0C4LRGMD3&docid=WGGsAF3A_gBWoM&tbnid=ddVaOA9j7TbMuM&vet=12ahUKEwixt5L17qSKAxUpR2cHHbbhMzoQM3oECGUQAA..i&w=716&h=1000&hcb=2&ved=2ahUKEwixt5L17qSKAxUpR2cHHbbhMzoQM3oECGUQAA":v
        }
    },
    amount: {
        type:String
    },
    price: {
        type:Number
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;