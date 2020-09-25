/**
 * @module express require module express
 * @module hbs require module hbs
 * @module mainRouter require module ./routes/mainRoutes
 * 
 * @type {app } connect metod express() to work with requests/response
*/

const express = require('express');
const hbs = require('hbs');
const mainRouter = require('./routes/mainRoutes')
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

app.use(express.static(`${__dirname}/public/css`));
app.use(express.static(`${__dirname}/public/js`));

app.use("/", mainRouter);

app.use((req, res)=>{
    res.send(404,"Page Not Found");
    res.redirect("/");
})

app.listen(3000)