const router = require('express').Router();
const axios = require('axios');
const aws = require('./config.js');

router.get('/*', (req, res) => {
  axios.get(`${aws.PRODUCTS}:${aws.PRODUCTPORT}/productid`, { params: req.params[0] })
    .then(response => res.send(response.data[0]))
    .catch(err => console.log(err))
});

module.exports = router;