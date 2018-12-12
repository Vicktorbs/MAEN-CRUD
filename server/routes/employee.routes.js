const express = require('express');
const router = express.Router();

// Ruta para enviar y recibir informacion
router.get('/', (red, res) => {
    res.send({
        status: 'API Works'
    });
})

module.exports = router;