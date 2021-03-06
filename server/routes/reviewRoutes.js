const router = require('express').Router();
const axios = require('axios');

const reviewUrl = 'http://localhost:4001';

router.get('/', (req, res) => {
  axios.get(`${reviewUrl}${req.url}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

router.get('/meta', (req, res) => {
  axios.get(`${reviewUrl}${req.url}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

router.post('/', (req, res) => {
  axios.post(`${reviewUrl}/`, req.body)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

router.put('/*/helpful', (req, res) => {
  axios.put(`${reviewUrl}${req.url}/`, {})
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

router.put('/*/report', (req, res) => {
  axios.put(`${reviewUrl}${req.url}/`, {})
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

module.exports = router;