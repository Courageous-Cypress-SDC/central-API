const router = require('express').Router();
const axios = require('axios');
const PRODUCT_URL = 'http://localhost:3001';

router.get('/*', (req, res) => {
  axios.get(`http://localhost:3001/productid`, { params: req.params[0] })
    .then(response => res.send(response.data[0]))
    .catch(err => console.log(err))
});


module.exports = router;
