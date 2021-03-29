const express = require('express');
const Profiles = require('../profile/profileModel');
const Cities = require('../city/cityModel');
const router = express.Router();

router.get('/', function (req, res) {
  const { id } = req.params;
  Profiles.findCities(id)
    .then((city) => {
      res.status(200).json(city);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:city_id', (req, res) => {
  const { id } = req.params;
  Profiles.findCities(id)
    .then((city) => {
      if (city.length) {
        res.status(200).json(city);
      } else {
        res
          .status(404)
          .json({ message: 'could not find city for given user ID' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'failed to get city', err });
    });
});

router.post('/', async (req, res) => {
  const city = req.body;
  city.profile_id = req.params.id;

  try {
    const newCity = await Cities.add(city);
    res.status(201).json(newCity);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

router.delete('/:city_id', async (req, res, next) => {
  const { city_id } = req.params;

  const city = Cities.findById(city_id);

  try {
    if (city) {
      await Cities.remove(city_id);

      res.status(200).json({
        city_id,
        message: 'city deleted',
      });
    }
  } catch (err) {
    next({ apiCode: 500, apiMessage: 'failed to delete city', ...err });
  }
});

module.exports = router;
