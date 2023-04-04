const express = require("express");
const hbs = require("hbs");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT ?? 8080;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));
hbs.registerPartials('views/partials')

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})