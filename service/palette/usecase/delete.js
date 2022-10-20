export class DeleteUsecasePalette {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_palette) {
    const paletteDeleted = await this.repository.delete(id_palette);
    if (!paletteDeleted) {
      throw new Error('There was an error deleting the user');
    }

    return paletteDeleted;
  }
}
