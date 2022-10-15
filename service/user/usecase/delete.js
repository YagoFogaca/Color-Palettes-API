export class DeleteUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const userDeleted = await this.repository.delete(id_user);
    if (!userDeleted) {
      throw new Error('There was an error deleting the user');
    }

    return userDeleted;
  }
}
