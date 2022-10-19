export class ControllerUser {
  constructor(service, jwt) {
    this.service = service;
    this.jwt = jwt;
  }

  async create(req, res) {
    try {
      await this.service.create(req.body);
      res.status(201).send({ message: 'User created successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }

  async delete(req, res) {
    try {
      await this.service.delete(req.params.id);
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }

  async login(req, res) {
    try {
      const user = await this.service.login(req.body);
      const token = this.jwt.Sing(user);
      res.status(200).send({ token: token, user: user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.service.update(req.params.id, req.body);
      res.status(200).send({ message: 'User updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }
}
