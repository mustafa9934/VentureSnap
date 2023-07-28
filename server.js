const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const appRoutes = require("./routes/index");
app.use("/api", appRoutes);

// DB
require("./config/db");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
