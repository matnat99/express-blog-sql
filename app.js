const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Global routers Middleware
const postsRouter = require("./routers/postsRouter");

// Global errors Middleware
const errorsHandler = require("./middlewares/errorsHandler.js");
const notFound = require("./middlewares/notFound.js");

app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use("/posts", postsRouter);

// Errors handler Middleware
app.use(errorsHandler);
// Not found Middleware
app.use(notFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
