const mongoose = require("mongoose");

const conn = async (req,res) => {
    try {
        await mongoose.connect("mongodb+srv://user:root@cluster0.yd3ga8y.mongodb.net/").then(()=>{
            console.log("C0nnectd");
        });
    } catch (error) {
        res.status(400).json({
            message: "Not Connectd"
        });
    }
};

conn(); 