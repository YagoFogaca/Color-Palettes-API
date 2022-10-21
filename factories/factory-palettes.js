import { PaletteRepository } from '../database/repositorys/palette-repository.js';
import { CreateUsecasePalette } from '../service/palette/usecase/create.js';
import { DeleteUsecasePalette } from '../service/palette/usecase/delete.js';
import { GetAllUsecasePalette } from '../service/palette/usecase/getAll.js';
import { GetByIdUsecasePalette } from '../service/palette/usecase/getById.js';
import { GetByIdUserUsecasePalette } from '../service/palette/usecase/getByIdUser.js';
import { UpdateUsecasePalette } from '../service/palette/usecase/update.js';
import { ServicePalette } from '../service/palette/service-palette.js';
import { ControllerPalette } from '../controllers/controller-palette.js';
import { RoutePalette } from '../routes/routes-palettes.js';
import { PaletteEntity } from '../entities/palette/palette.entity.js';
import { MiddlewareAuthorization } from '../middleware/authorization.js';

export function factoryPalette(router) {
  const getAllUsecasePalette = new GetAllUsecasePalette(PaletteRepository);
  const getByIdUsecasePalette = new GetByIdUsecasePalette(PaletteRepository);
  const getByIdUserUsecasePalette = new GetByIdUserUsecasePalette(
    PaletteRepository,
  );
  const createUsecasePalette = new CreateUsecasePalette(
    PaletteRepository,
    PaletteEntity,
  );
  const deleteUsecasePalette = new DeleteUsecasePalette(PaletteRepository);
  const updateUsecasePalette = new UpdateUsecasePalette(
    PaletteRepository,
    getByIdUsecasePalette,
  );

  const service = new ServicePalette(
    createUsecasePalette,
    deleteUsecasePalette,
    getAllUsecasePalette,
    getByIdUserUsecasePalette,
    updateUsecasePalette,
  );

  const controller = new ControllerPalette(service);
  const routes = new RoutePalette(controller, router, MiddlewareAuthorization);

  return routes;
}
