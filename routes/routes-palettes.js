export class RoutePalette {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  Routes() {
    this.router.get('/palettes', (req, res) => {
      this.controller.getAll(req, res);
    });

    this.router.get('/palettes/:id', (req, res) => {
      this.controller.getByIdUser(req, res);
    });

    this.router.post('/create-palette', (req, res) => {
      this.controller.create(req, res);
    });

    this.router.delete('/delete-palette/:id', (req, res) => {
      this.controller.delete(req, res);
    });

    this.router.patch('/update-palette/:id', (req, res) => {
      this.controller.update(req, res);
    });

    return this.router;
  }
}
