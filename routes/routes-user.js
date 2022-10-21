export class RouteUser {
  constructor(controller, router, middlewareAuthorization) {
    this.controller = controller;
    this.router = router;
    this.middlewareAuthorization = middlewareAuthorization;
  }

  Routes() {
    this.router.post('/create-user', (req, res) => {
      this.controller.create(req, res);
    });

    this.router.delete(
      '/delete-user/:id',
      (req, res, next) => {
        this.middlewareAuthorization.authorization(req, res, next);
      },
      (req, res) => {
        this.controller.delete(req, res);
      },
    );

    this.router.post('/login', (req, res) => {
      this.controller.login(req, res);
    });

    this.router.patch(
      '/update-user/:id',
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
