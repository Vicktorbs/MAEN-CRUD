const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database')

// Settings
// ---------------------------------------------------------
// Configuracion del puerto
app.set('port',  process.env.PORT || 3000);

// Midelwares
// ---------------------------------------------------------
// Recibe las peticiones del navegador
app.use(morgan('dev'));
// Convierte el codigo en formato JSON para que el servidor lo pueda entender
app.use(express.json());


// Routes
// ---------------------------------------------------------
app.use(require('./routes/employee.routes'));

// Servidor escuchando en el puerto 3000
app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:', app.get('port'));
    
});