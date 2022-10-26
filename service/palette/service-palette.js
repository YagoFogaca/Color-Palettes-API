export class ServicePalette {
  constructor(
    createUsecasePalette,
    deleteUsecasePalette,
    getAllUsecasePalette,
    getByIdUserUsecasePalette,
    updateUsecasePalette,
    getByIdUsecasePalette,
  ) {
    this.createUsecasePalette = createUsecasePalette;
    this.deleteUsecasePalette = deleteUsecasePalette;
    this.getAllUsecasePalette = getAllUsecasePalette;
    this.getByIdUserUsecasePalette = getByIdUserUsecasePalette;
    this.updateUsecasePalette = updateUsecasePalette;
    this.getByIdUsecasePalette = getByIdUsecasePalette;
  }

  async create(palette) {
    return await this.createUsecasePalette.execute(palette);
  }

  async delete(id_palette) {
    return await this.deleteUsecasePalette.execute(id_palette);
  }

  async getAll() {
    return await this.getAllUsecasePalette.execute();
  }

  async getByIdUser(id_user) {
    return await this.getByIdUserUsecasePalette.execute(id_user);
  }

  async getById(id) {
    return await this.getByIdUsecasePalette.execute(id);
  }

  async update(id_palette, palette) {
    return await this.updateUsecasePalette.execute(id_palette, palette);
  }
}
