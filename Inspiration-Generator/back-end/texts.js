const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Configure multer so that it will upload to '/public/inspirations'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/inspirations/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;


const textSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  title: String,
  inspiration: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Text = mongoose.model('Text', textSchema);

// upload Text
router.post("/", validUser, upload.single('text'), async (req, res) => {
 
  const text = new Text({
    user: req.user,
    path: "/inspirations/" + req.body.title,
    title: req.body.title,
    inspiration: req.body.inspiration,
  });
  try {
    await text.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


// get my texts
router.get("/", validUser, async (req, res) => {
  // return texts
  try {
    let texts = await Text.find({
      user: req.user
    }).sort({
      created: -1
    }).populate('user');
    return res.send(texts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get all texts
router.get("/all", async (req, res) => {
  try {
    let texts = await Text.find().sort({
      created: -1
    }).populate('user');
    return res.send(texts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


module.exports = {
  model: Text,
  routes: router,
}

