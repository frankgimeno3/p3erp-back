// src/models/userModel.js
import mongoose from 'mongoose';

const Empresa  = new mongoose.Schema({
  codigo: { type: string, required: true, unique: true },
  nombrefiscal: { type: String, required: true, unique: true },
  nombrecomercial: { type: String, required: true },
  telefonobase: { type: String, required: true },
  emailbase: { type: String, required: true },

});

const User = mongoose.model('Empresa', empresaSchema);

export default Empresa;