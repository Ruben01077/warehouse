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
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2020',
    part_name: 'Tail Light',
    side: 'Left',
    description: 'Scratch'
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2020',
    part_name: 'Tail Light',
    side: 'Left',
    description: 'Scratch'
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: '2020',
    part_name: 'Tail Light',
    side: 'Left',
    description: 'Scratch'
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
  

  router.get('/new', (req, res) => {
    res.render('inventory/new')
  })
  

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /inventory')
  })




module.exports = router