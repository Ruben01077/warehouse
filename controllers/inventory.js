const express = require('express')
const router = require('express').Router()
const inventory = require("../models/inventory") // Models


router.use(express.static('public'))


// GET /inventory
router.get('/', (req, res) => {

    res.render('inventory/index', {inventory})

  })
  

  router.get('/new', (req, res) => {
    res.render('inventory/new')
  })

  
// POST /Inventory
  router.post('/', (req, res) => {
    
    if(!req.body.side) {
      //Default
      req.body.side = "Unknown"
    }
    if(!req.body.description) {
      //Default
      req.body.description = "Good"
    }
    inventory.push(req.body) // push the data to the route
    res.redirect('/inventory')
  })




module.exports = router