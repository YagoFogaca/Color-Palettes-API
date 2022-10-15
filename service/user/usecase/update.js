export class UpdateUsecase {
  constructor(repository, getByIdUsecase) {
    this.repository = repository;
    this.getByIdUsecase = getByIdUsecase;
  }

  async execute(id_user, user) {
    const userUpdate = await this.getByIdUsecase.execute(id_user);
    const userCopy = Object.assign(userUpdate, user);

    const userUpdated = await this.repository.update(id_user, userCopy);
    if (!userUpdated) {
      throw new Error('There was an error updating the user');
    }

    return userUpdated;
  }
}
