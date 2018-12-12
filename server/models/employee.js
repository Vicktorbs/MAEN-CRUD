// Definicion de los esquemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir nuevo esquema de la base de datos para modelar los datos de los empleados
const EnployeeSchema = new Schema({
    name: {type: String, required: true},
    activity: {type: String, required: true},
    production: {type: Number, required: true}
});

// Pasando a modelo de datos de mongoose
module.exports = mongoose.model('Enployee', EnployeeSchema);