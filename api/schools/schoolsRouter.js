const express = require('express');
// const authRequired = require('../middleware/authRequired');
const Schools = require('./schoolsModel');
const router = express.Router();
router.get('/', function (req, res) {
  Schools.findAll()
    .then((city) => {
      res.status(200).json(city);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});
router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Schools.findById(id)
    .then((city) => {
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).json({ error: 'City Data Not Found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;
