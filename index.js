const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res)=>{

    res.send("Hello from home")

})

app.use('/inventory', require('./controllers/inventory'))

app.get('*',(req, res)=>{
    
    res.status(404).send("Error404")
    
})

app.listen(process.env.PORT)

