import { paletteModel } from '../mongo/schemas/palette-schema';

export class PaletteRepository {
  static async getAll() {
    return await paletteModel.find();
  }

  static async getByIdUser(id_user) {
    return await paletteModel.findOne({ id_user: id_user });
  }

  static async getById(id_palette) {
    return await paletteModel.findOne({ id: id_palette });
  }

  static async create(palette) {
    return await paletteModel.create(palette);
  }

  static async update(id_palette, palette) {
    return await paletteModel.findOneAndUpdate({ id: id_palette }, palette);
  }

  static async delete(id_palette) {
    return await paletteModel.deleteOne({ id: id_palette });
  }
}
