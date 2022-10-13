import { Schema, model } from 'mongoose';

const paletteSchema = new Schema({
  id: { type: String, require: true },
  id_user: { type: String, require: true },
  colors: { type: String, require: true },
  creationdate: { type: String, require: true },
});

export const paletteModel = model('Palettes', paletteSchema);
