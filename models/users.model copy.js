// src/models/userModel.js
import mongoose from 'mongoose';

const Empresa  = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default Empresa;