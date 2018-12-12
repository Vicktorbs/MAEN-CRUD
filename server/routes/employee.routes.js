const express = require('express');
const router = express.Router();

router.get('/', (red, res) => {
    res.send({
        status: 'API Works'
    });
})

module.exports = router;