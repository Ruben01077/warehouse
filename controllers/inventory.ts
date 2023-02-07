//const express = require('express')
const router = require('express').Router()
const db = require('../models') // Models



router.use(express.static('public'))




router.get('/', (req:any, res:any) => {
  db.Part.find()
  .then((inventory:any)=>{
    res.render('inventory/index', {inventory})
  })
  .catch((err: any) =>{
    console.log(err)
    res.status(404).render('error404')
  })
})

router.post('/', (req:any, res:any) => {
  db.Part.create(req.body)
  .then(()=>{
    res.redirect('/inventory')
  })
  .catch((err: any) => {
    console.log('err', err)
    res.render('error404')
  })
})


router.get('/new', (req:any, res:any) => {
  res.render('inventory/new')
})


router.get('/:id', (req:any, res:any) => {
 db.Part.findById(req.params.id)
 .then((part: any) => {
  res.render('inventory/show', {part})
 })
 .catch((err:any) =>{
  console.log('err', err)
  res.render('error404')
 })
})


router.put('/:id', (req:any, res:any) => {
  db.Part.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(()=> {
   res.redirect(`/inventory/${req.params.id}`)
  })
  .catch((err:any) =>{
   console.log('err', err)
   res.render('error404')
  })
 })


router.delete('/:id', (req:any, res:any) => {
  db.Part.findByIdAndDelete(req.params.id)
  .then(() => {
      res.redirect('/inventory')
  })
  .catch((err: any) => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/:id/edit', (req:any, res:any) => {
  db.Part.findById(req.params.id)
        .then((part: any) => {
            res.render('inventory/edit', { part })
        })
        .catch((err: any) => {
            res.render('error404')
        })
})



module.exports = router





  
  
  


module.exports = router