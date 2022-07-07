var express = require('express');
var router = express.Router();
var Link = require('../models/Link.js')

/* GET links listing. */
router.get('/', function(req, res, next) {
  const links = Link.find();
  console.log(links)
  res.send(links);
});

router.get('/:id', function(req, res, next) {
  const link = Link.find(id);
  res.send(link);
});

router.post('/', async function(req, res, next) {
  const link = {
    id: req.body.id,
    link: req.body.link,
  }
  await link.save()
  res.send(link)
});

module.exports = router;
