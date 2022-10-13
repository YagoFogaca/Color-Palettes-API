import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  image: { type: String, require: true },
  palettes: { type: String, require: true },
});

export const userModel = model('User', userSchema);
