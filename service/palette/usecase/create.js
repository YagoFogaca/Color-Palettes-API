export class CreateUsecasePalette {
  constructor(repository, entity) {
    this.repository = repository;
    this.entity = entity;
  }

  async execute(palette) {
    const entityPalette = new entity(palette);
    const palletCreation = await this.repository.create(
      entityPalette.printPalette(),
    );
    if (!palletCreation) {
      throw new Error('Palette creation error');
    }

    return palletCreation;
  }
}
