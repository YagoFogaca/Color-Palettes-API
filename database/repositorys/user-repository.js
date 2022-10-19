import { userModel } from '../mongo/schemas/user-schema.js';

export class UserRepository {
  static async login(email_user) {
    return await userModel.findOne({ email: email_user });
  }

  static async getById(id_user) {
    return await userModel.findOne({ id: id_user });
  }

  static async create(user) {
    return await userModel.create(user);
  }

  static async update(id_user, user) {
    return await userModel.findOneAndUpdate({ id: id_user }, user);
  }

  static async delete(id_user) {
    return await userModel.deleteOne({ id: id_user });
  }
}
