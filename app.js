const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");
const path = require("path");

require("./connection/connection");

const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// API routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Serve React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
