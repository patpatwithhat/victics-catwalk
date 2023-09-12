const express = require('express');
const CatService = require('./CatService');

const router = express.Router();
const catService = new CatService();

router.get('/', async (req, res) => {
  try {
    const image = await catService.getRandomCatImage();
    res.render('index', { image });
  } catch (error) {
    res.status(500).send('Internal Server Error: ' + error);
  }
});

router.get('/next', async (req, res) => {
  const image = await catService.getRandomCatImage();
  res.json({ image });
});

module.exports = router;
