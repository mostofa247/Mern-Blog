const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const app = express();

dbConnect();
app.use(express.json());
/*
const logger = (req, res, next) => {
  console.log("Am a logger");
  next();
};
app.use(logger);
*/
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

/*
app.post("/api/users/login", (req, res) => {
  res.json({ user: "User Log In" });
});

app.get("/api/users", (req, res) => {
  res.json({ user: "User Log In" });
});
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running`));
