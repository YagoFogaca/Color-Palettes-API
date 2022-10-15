export class CreateUsecase {
  constrcutor(repository, entity, bcrypt) {
    this.repository = repository;
    this.entity = entity;
    this.bcrypt = bcrypt;
  }

  async execute(user) {
    const checkEmail = await this.repository.login(user.email);
    if (checkEmail) {
      throw new Error('Email has already been registered');
    }

    const userEntity = new this.entity(user);
    userEntity.validateEmail();
    userEntity.validatePassword();
    const verifiedUser = userEntity.printUser();

    verifiedUser.password = this.bcrypt.Hash(verifiedUser.password);

    const createdUser = await this.repository.create(verifiedUser);
    if (!createdUser) {
      throw new Error('There was an error creating the user');
    }

    return createdUser;
  }
}
