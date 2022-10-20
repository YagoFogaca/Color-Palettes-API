export class GetByIdUsecasePalette {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_palette) {
    const paletteId = await this.repository.getById(id_palette);
    if (!paletteId) {
      throw new Error('You do not register any palette');
    }

    return paletteId;
  }
}
