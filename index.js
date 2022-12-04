const express = require('express')
const app = express()
require('dotenv').config()

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


app.use(express.static('public'))

app.get("/", (req, res)=>{
res.render("home")
})

app.use('/inventory', require('./controllers/inventory'))


app.get("*", (req,res)=>{

    res.render("error404")

})

app.listen(process.env.PORT)

