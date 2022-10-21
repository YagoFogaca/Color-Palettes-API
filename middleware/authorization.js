import { Jwt } from '../utils/jwt/jwt.js';

export class MiddlewareAuthorization {
  static authorization(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error('Authorization token not provided');
      }

      Jwt.Verify(token.splice(7));

      next();
    } catch (err) {
      console.log(err);
      res.status(401).send(err.message);
    }
  }
}
