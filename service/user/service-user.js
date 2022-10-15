export class ServiceUser {
  constructor(createUsecase, deleteUsecase, loginUsecase, updateUsecase) {
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
    this.loginUsecase = loginUsecase;
    this.updateUsecase = updateUsecase;
  }

  async create(user) {
    return await this.createUsecase.execute(user);
  }

  async delete(id_user) {
    return await this.deleteUsecase.execute(id_user);
  }

  async login(user) {
    return await this.loginUsecase.execute(user);
  }

  async update(id_user, user) {
    return await this.updateUsecase.execute(id_user, user);
  }
}
