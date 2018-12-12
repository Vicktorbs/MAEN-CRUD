const express = require('express');
const router = express.Router();

router.get('/', (red, res) => {
    res.send('Hello World');
})

module.exports = router;