const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: String,
  clave: String,
  whatsapp: Number,
  razonSocial: String,
  ciudad: String,
});

const datosSchema = new Schema({
  email: String,
  producto: String,
  fecha: String,
});

const Users = mongoose.model('Users', usersSchema);
const Datos = mongoose.model('Datos', datosSchema);

module.exports = { Users, Datos };