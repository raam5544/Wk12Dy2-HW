const express = require('express')
const app = express()
const pokimon = require('./models/pokemon')

app.set("view engine", "jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views").createEngine())
// --> Initializes ViewEngine

app.use(express.urlencoded({ extended: false }));
// --> Parse URLencoded responses [req.body*]

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow
// ---------------------------------[Middleware]


app.get('/', (req, res) => {
    res.send("<h1>Wellcome to the Pokemon App!</h1>")
})

app.get('/pokemon', (req, res) => {
    res.render('index', { poke: pokimon })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show', { poke: pokimon[req.params.id] })
})
// ----------------------------------[Index (R)]

// app.get('/fruits/new', (req, res) => {
//     res.render('New')
// })
// --------------------------------------[New]

// app.post('/fruits', (req, res) => {
//     if (req.body.readyToEat === 'on') {
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     froots.push(req.body)
//     // ---> Add New Fruit to Existing DataSet
//     console.log(req.body)
//     res.redirect('/fruits')
// })
// ----------------------------------[POST (C)]


// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.render('Show', {
//         fruit: froots[req.params.indexOfFruitsArray]
//     })
// })
// ----------------------------------[Show]



app.listen(3000, () => {
    console.log("YerrOn3k")
})