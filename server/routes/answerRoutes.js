const express = require('express');
const router = express.Router();

const qaURL = 'http://ec2-54-219-4-157.us-west-1.compute.amazonaws.com/';


router.put('/*/helpful', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

router.put('/*/report', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

module.exports = router;