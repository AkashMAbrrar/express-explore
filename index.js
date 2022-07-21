const express = require('express');


const app = express();
const cors = require('cors');
const morgan = require('morgan');

// static directory
app.use(express.static('./public'));

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

app.use(require('./router'))

// Error maintaing

app.use((req, res, next) => {
    const error = new Error('404 page not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    console.log('Error', error);
    if (error) {
        return res.status(error.status).send(`<h1>${error.message}</h1>`);
    }
    res.status(500).send('<h1>something went wrong</h1>')
});

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