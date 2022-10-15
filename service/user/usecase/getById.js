export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const getById = await this.repository.getById(id_user);
    if (!getById) {
      throw new Error('No users with this id were found');
    }

    return getById;
  }
}
