const router = require("express").Router();
const User = require("../models/User");
const List = require("../models/List");
//create
router.post("/addTask" , async (req,res) => {
    try {
        const {title,body,id} = req.body;
    const existingUser = await User.findById(id);
    if(existingUser) {
        const list = new List({title,body,user:existingUser});
        await list.save().then(()=> res.status(200).json({list}));
        existingUser.list.push(list);
        existingUser.save();
    }
    } catch (error) {
        console.log("Error");
    }
});

//update
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body } = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, { title, body });
        if (list) {
            res.status(200).json({ message: "Task Updated" });
        } else {
            res.status(200).json({ message: "Task not found" });
        }
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(200).json({ message: "Internal Server Error" });
    }
});

//Delete
router.delete("/deleteTask/:id" , async (req,res) => {
    try {
        const {id} = req.body;
    const existingUser = await User.findByIdAndUpdate(id);
    if(existingUser) {
        await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({messgae:"Task Deleted"}));
    }
    } catch (error) {
        console.log("Error");
    }
});
//getTask
router.get("/getTask/:id" , async (req,res) => {
    try {
    const list = await List.find({user:req.params.id}).sort({createdAt : -1});
    if (list.length !==0) {
        res.status(200).json({list});
    }
    else {
        res.status(200).json({message:"No Task"});
    }
    } catch (error) {
        console.log("Error");
    }
});
module.exports=router;