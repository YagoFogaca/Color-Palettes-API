import { UserRepository } from '../database/repositorys/user-repository.js';
import { UserEntity } from '../entities/user/user-entity.js';
import { Bcrypt } from '../utils/bcrypt/bcrypt.js';
import { Jwt } from '../utils/jwt/jwt.js';
import { CreateUsecase } from '../service/user/usecase/create.js';
import { DeleteUsecase } from '../service/user/usecase/delete.js';
import { GetByIdUsecase } from '../service/user/usecase/getById.js';
import { LoginUsecase } from '../service/user/usecase/login.js';
import { UpdateUsecase } from '../service/user/usecase/update.js';
import { ServiceUser } from '../service/user/service-user.js';
import { ControllerUser } from '../controllers/controller-user.js';
import { RouteUser } from '../routes/routes-user.js';

export function factoryUser(router) {
  const createUsecase = new CreateUsecase(UserRepository, UserEntity, Bcrypt);
  const deleteUsecase = new DeleteUsecase(UserRepository);
  const getByIdUsecase = new GetByIdUsecase(UserRepository);
  const loginUsecase = new LoginUsecase(UserRepository, Bcrypt);
  const updateUsecase = new UpdateUsecase(UserRepository, getByIdUsecase);

  const serviceUser = new ServiceUser(
    createUsecase,
    deleteUsecase,
    loginUsecase,
    updateUsecase,
  );
  const controllerUser = new ControllerUser(serviceUser, Jwt);
  const routeUser = new RouteUser(controllerUser, router);

  return routeUser;
}
