const express = require('express');
const { getData, appendData } = require('../services/googleSheetsService');
const router = express.Router();

router.get('/data', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/data', async (req, res) => {
  try {
    const values = [
      [req.body.id, req.body.name, req.body.email]
    ];
    const response = await appendData(values);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
