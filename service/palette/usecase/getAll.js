export class GetAllUsecasePalette {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    const palettes = await this.repository.getAll();
    if (!palettes) {
      throw new Error('You do not register any palette');
    }

    return palettes;
  }
}
