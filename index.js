const express = require('express')
const app = express()
require('dotenv').config()
const methodOverride = require("method-override") // For Delete and Put methods

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res)=>{
res.render("home")
})

app.use('/inventory', require('./controllers/inventory'))


app.get("*", (req,res)=>{

    res.render("error404")

})

app.listen(process.env.PORT)

