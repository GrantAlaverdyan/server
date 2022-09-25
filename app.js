const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    console.log(req.query)
    const obj = {
        address: "Moscow",
        height: 185,
        phone: 89779847748
    }

    res.send(obj)
})

app.post('/', function (req, res) {

    console.log(req.body)
    res.send("Работает")
})


app.listen(3005, console.log("Сервер успешно запущен на порту 3005"))