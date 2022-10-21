export class RoutePalette {
  constructor(controller, router, middlewareAuthorization) {
    this.controller = controller;
    this.router = router;
    this.middlewareAuthorization = middlewareAuthorization;
  }

  Routes() {
    this.router.get('/palettes', (req, res) => {
      this.controller.getAll(req, res);
    });

    this.router.get(
      '/palettes/:id',
      (req, res, next) => {
        this.middlewareAuthorization.authorization(req, res, next);
      },
      (req, res) => {
        this.controller.getByIdUser(req, res);
      },
    );

    this.router.post(
      '/create-palette',
      (req, res, next) => {
        this.middlewareAuthorization.authorization(req, res, next);
      },
      (req, res) => {
        this.controller.create(req, res);
      },
    );

    this.router.delete(
      '/delete-palette/:id',
      (req, res, next) => {
        this.middlewareAuthorization.authorization(req, res, next);
      },
      (req, res) => {
        this.controller.delete(req, res);
      },
    );

    this.router.patch(
      '/update-palette/:id',
      (req, res, next) => {
        this.middlewareAuthorization.authorization(req, res, next);
      },
      (req, res) => {
        this.controller.update(req, res);
      },
    );

    return this.router;
  }
}
