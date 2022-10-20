export class UpdateUsecasePalette {
  constructor(repository, getByIdUsecasePalette) {
    this.repository = repository;
    this.getByIdUsecasePalette = getByIdUsecasePalette;
  }

  async execute(id_palette, palette) {
    const paletteUpdate = await this.getByIdUsecasePalette.execute(id_palette);
    const paletteCopy = Object.assign(paletteUpdate, palette);

    const paletteUpdated = await this.repository.update(
      id_palette,
      paletteCopy,
    );
    if (!paletteUpdated) {
      throw new Error('There was an error updating the user');
    }

    return paletteUpdated;
  }
}
