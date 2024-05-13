const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true,
    },
    username: {
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type:String,
        reuqired:true,
    },
    list: [
        {
            type:mongoose.Types.ObjectId,
            ref: "List",
        },
    ],
});

module.exports = mongoose.model("User",userschema);