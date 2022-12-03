const express = require('express')
const router = require('express').Router()


router.use(express.static('public'))


// GET /inventory
router.get('/', (req, res) => {

  let inventory = [{
    make: 'Toyota',
    model: 'Prius',
    year: '2019',
    part_name: 'Headlight',
    side: 'Right',
    description: 'OK'
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2020',
    part_name: 'Tail Light',
    side: 'Left',
    description: 'Scratch'
  }]
  

    res.render('inventory/index', {inventory})
  })
  





module.exports = router