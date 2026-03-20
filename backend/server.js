const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection
const MONGO_URL = "mongodb://localhost:27017/devopsDB";

mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// 📦 Schema
const MessageSchema = new mongoose.Schema({
    text: String
});

const Message = mongoose.model("Message", MessageSchema);

// ➕ Create message
app.post("/api/message", async (req, res) => {
    const { text } = req.body;

    const msg = new Message({ text });
    await msg.save();

    res.json({ status: "Saved" });
});

// 📥 Get all messages
app.get("/api/message", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
