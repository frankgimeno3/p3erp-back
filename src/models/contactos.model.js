// src/models/userModel.js
import mongoose from 'mongoose';

const contactoSchema  = new mongoose.Schema({
  codigo: { type: string, required: true, unique: true },
  nombrecontacto: { type: String, required: true, unique: true },
  apellidos: { type: String, required: true },
  empresaactual: { type: String, required: true },
  cargoactual: { type: String, required: true },
  detalles: { type: String, required: true },
  empresasycargosanteriores: { type: String, required: true },
  telefono1: { type: String, required: true },
  detallestelefono1: { type: String, required: true },
  telefono2: { type: String, required: true },
  detallestelefono2: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
  idioma: { type: String, required: true },
  timestampscreation: { type: String, required: true },

});

const Contacto = mongoose.model('Contacto', contactoSchema);

export default Contacto;