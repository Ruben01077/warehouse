"use strict";
//const express = require('express')
const router = require('express').Router();
const db = require('../models'); // Models
router.use(express.static('public'));
router.get('/', (req, res) => {
    db.Part.find()
        .then((inventory) => {
        res.render('inventory/index', { inventory });
    })
        .catch((err) => {
        console.log(err);
        res.status(404).render('error404');
    });
});
router.post('/', (req, res) => {
    db.Part.create(req.body)
        .then(() => {
        res.redirect('/inventory');
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
router.get('/new', (req, res) => {
    res.render('inventory/new');
});
router.get('/:id', (req, res) => {
    db.Part.findById(req.params.id)
        .then((part) => {
        res.render('inventory/show', { part });
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
router.put('/:id', (req, res) => {
    db.Part.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
        res.redirect(`/inventory/${req.params.id}`);
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
router.delete('/:id', (req, res) => {
    db.Part.findByIdAndDelete(req.params.id)
        .then(() => {
        res.redirect('/inventory');
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
router.get('/:id/edit', (req, res) => {
    db.Part.findById(req.params.id)
        .then((part) => {
        res.render('inventory/edit', { part });
    })
        .catch((err) => {
        res.render('error404');
    });
});
module.exports = router;
module.exports = router;
