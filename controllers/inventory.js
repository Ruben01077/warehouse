const express = require('express')
const router = require('express').Router()
const db = require('../models') // Models
const inventory = require('../models/inventory')


router.use(express.static('public'))




router.get('/', (req, res) => {
  db.Part.find()
  .then((inventory)=>{
    res.render('inventory/index', {inventory})
  })
  .catch(err =>{
    console.log(err)
    res.status(404).render('error404')
  })
})

router.post('/', (req, res) => {
  db.Part.create(req.body)
  .then(()=>{
    res.redirect('/inventory')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('inventory/new')
})

router.get('/:id', (req, res) => {
 db.Part.findById(req.params.id)
 .then(part => {
  res.render('inventory/show', {part})
 })
 .catch(err =>{
  console.log('err', err)
  res.render('error404')
 })
})

router.put('/:id', (req, res) => {
  db.Part.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatePart)=> {
   res.redirect(`/inventory/${req.params.id}`)
  })
  .catch(err =>{
   console.log('err', err)
   res.render('error404')
  })
 })

router.delete('/:id', (req, res) => {
  db.Part.findByIdAndDelete(req.params.id)
  .then((deletePart) => {
      res.redirect('/inventory')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Part.findById(req.params.id)
        .then(part => {
            res.render('inventory/edit', { part })
        })
        .catch(err => {
            res.render('error404')
        })
})



module.exports = router



// // GET /inventory
// router.get('/', (req, res) => {

//     res.render('inventory/index', {inventory})

//   })


  

//   router.get('/new', (req, res) => {
//     res.render('inventory/new')
//   })

  
// // POST /Inventory
//   router.post('/', (req, res) => {
    
//     if(!req.body.side) {
//       //Default
//       req.body.side = "Unknown"
//     }
//     if(!req.body.description) {
//       //Default
//       req.body.description = "Good"
//     }
//     inventory.push(req.body) // push the data to the route
//     res.redirect("/inventory")
//   })

//   router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!inventory[id]) {
//       res.render('error404')
//     }
//     else {
//       res.render('inventory/show', {part:inventory[id], id})
//     }
//   })
  
//   router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!inventory[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('inventory/edit', { part: inventory[id], id })
     
//     }
//   })
  

//   router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!inventory[id]) {
//         res.render('error404')
//     }
//     else {
//         inventory[id] = req.body
//         res.redirect(`/inventory/${id}`)
//     }
//   })
  
  
  
//   router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!inventory[id]) {
//       res.render('error404')
//     }
//     else {
//       inventory.splice(id, 1)
//       res.redirect('/inventory')
//     }
//   })
  
  
  
  


module.exports = router