// DEPENDENCIES
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const methodOverride = require('method-override');

// METHOD OVERRIDE
router.use(methodOverride('_method'));

// MODEL
const Poem = require('../models/poems');


// INDEX
router.get("/", (req, res) => {
    Poem.find({}, (error, allPoems) => {
        if (error) {
            res.send(error)
        } else {
            res.render("index.ejs", {
                poems: allPoems
            });
        };
    });
});

// NEW
router.get("/new", (req, res) => {
    res.render("new.ejs")
});

// CREATE
router.post("/new", (req, res) => {
    Poem.create(req.body, (error, createdPoem) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect("/poems")
        };
    });
});

// SHOW
router.get("/:id", (req, res) => {
    Poem.findById(req.params.id, (err, foundPoem) => {
        res.render("show.ejs", {
            poem: foundPoem
        });
    });
});

// EDIT
router.get("/:id/edit", (req, res) => {
    Poem.findById(req.params.id, (err, foundPoem) => {
        if (err) {
            res.send(err)
        } else {
            res.render("edit.ejs", {
                poem: foundPoem,
                id: foundPoem.id 
            });
        };
    });
});

// UPDATE
router.put("/:id", (req, res) => {
    Poem.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, foundPoem) => {
        res.redirect(`/poems/${req.params.id}`)
    });

});


// DELETE
router.delete("/:id", (req, res) => {
    Poem.findByIdAndRemove(req.params.id, (error, deletedSuccessfully) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect("/poems")
        };
    });
});



module.exports = router