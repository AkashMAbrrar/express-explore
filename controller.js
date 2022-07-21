const fs = require('fs');

exports.homeController = (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log(err, "error");
            res.send('<h3>something went wrong</h3>')
        } else {
            res.write(data)
            res.end();
        }
    })
};

// about controller 

exports.aboutController = (req, res) => {
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
};