export class GetByIdUserUsecasePalette {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const paletteUser = await this.repository.getByIdUser(id_user);
    if (!paletteUser) {
      throw new Error('You do not register any palette');
    }

    return paletteUser;
  }
}
