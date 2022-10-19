import jwt from 'jsonwebtoken';

export class Jwt {
  static Sing(user) {
    return jwt.sign({ user }, process.env.SECRET, {
      expiresIn: '12h',
    });
  }

  static Verify(token) {
    return jwt.verify(token, process.env.SECRET);
  }
}
