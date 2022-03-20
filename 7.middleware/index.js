const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
    console.log("reqFilter");
    next();
};
app.use(reqFilter);
app.get("/", (req, res) => {
    res.send("Welcome to Home page");
});
app.get("/about", (req, res) => {
    res.send("Welcome to About page"); 
});
app.listen(4000);
