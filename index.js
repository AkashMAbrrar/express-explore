const express = require('express');


const app = express();
const cors = require('cors');
const morgan = require('morgan');



// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

app.use(require('./router'))

// using router

// const router = express.Router();

// send html files



app.get('/about', (req, res, next) => {
    res.send(

        `
        <h1>Hello There, I am the all about second gf of this page</h1>
        `
    )
});
app.get('/help', (req, res, next) => {
    res.send(

        `
        <h1>Hello There, I am the helpful gf of this page</h1>
        `
    )
});
app.get('/contact', (req, res, next) => {
    res.send(

        `
        <h1>Hello There, I am the contact of this page</h1>
        `
    )
});

app.listen(4000, () => {
    console.log("server is listening on PORT 4000");
})
// 127.0. 0.1