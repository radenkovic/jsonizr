const express = require('express');
const fs = require('fs');
const jsonMarkup = require('json-markup');

const router = express.Router();


// List Files
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Render API Doc Page
router.get('/:folder/:file', (req, res) => {
  fs.readFile('./docs/' + req.params.folder + '/' + req.params.file + '.json', 'utf8', (err, data) => {
    if (err) {
      res.status(404);
      res.render('api', { title: 'Not Found' });
      return;
    }

    // Some formatting
    const parsedData = JSON.parse(data);
    parsedData.input = jsonMarkup(parsedData.input);
    parsedData.output = jsonMarkup(parsedData.output);


    res.render('api', parsedData);
  });
});

module.exports = router;
