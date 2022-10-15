export class LoginUsecase {
  constructor(repository, bcrypt) {
    this.repository = repository;
    this.bcrypt = bcrypt;
  }

  async execute(user) {
    const getUser = await this.repository.login(user.email);
    if (!getUser) {
      throw new Error('User not found with this email');
    }

    this.bcrypt.Compare(user.password, getUser.password);

    return getUser;
  }
}
