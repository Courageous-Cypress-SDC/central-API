const router = require('express').Router();
const axios = require('axios');

router.get('/*', (req, res) => {
  axios.get(`http://127.0.0.1:3005/styles`, { params: req.params[0] })
    .then(response => res.send(response.data[0]))
    .catch(err => console.log(err))
});

module.exports = router;