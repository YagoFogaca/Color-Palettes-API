import bcrypt from 'bcrypt';

export class Bcrypt {
  static Hash(password) {
    return bcrypt.hashSync(password, 10);
  }

  static Compare(password, passwordCompare) {
    const compareHash = bcrypt.compareSync(password, passwordCompare);
    if (!compareHash) {
      throw new Error('Invalid password');
    }

    return compareHash;
  }
}
