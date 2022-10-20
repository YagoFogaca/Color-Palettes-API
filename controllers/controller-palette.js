export class ControllerPalette {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    try {
      await this.service.create(req.body);
      res.status(201).send({ message: 'Palette created successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }

  async delete(req, res) {
    try {
      await this.service.delete(req.params.id);
      res.status(200).send({ message: 'Palette deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getAll(req, res) {
    try {
      const palettes = await this.service.getAll();
      res.send(200).send(palettes);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getByIdUser(req, res) {
    try {
      const palettesUser = await this.service.getByIdUser(req.params.id);
      res.status(200).send(palettesUser);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.service.update(req.params.id, req.body);
      res.status(200).send({ message: 'Palette updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }
}
