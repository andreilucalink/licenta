const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

//@route GET api/items
//@desc Get All Items

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route POST api/items
//@desc Create an item

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    contact: req.body.contact,
    urgenta: req.body.urgenta
  });
  newItem.save().then(item => res.json(item));
});

//@route DETELE api/items
//@desc Delete an item

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(err => res.status(404).json({ succes: false }));
});

module.exports = router;
