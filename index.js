const express = require('express');

const app = express();

// for getting data from server 
app.get('/', (req, res) => {
    res.send(`
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Examples</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 60px;
        }

        .container {
            width: 50%;
            margin: 2rem auto;
            padding: 2rem;
            height: 75%;
            background-color: coral;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hello World From Dhaka Express</h1>
        <p>I am running with nodemon adipisicing elit. Enim saepe, accusamus est quisquam earum repellendus
            voluptate nihil nobis quibusdam dolores unde? Unde, perspiciatis deleniti aut excepturi numquam perferendis
            facere ut!</p>
    </div>
</body>

</html>

    `)
});

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