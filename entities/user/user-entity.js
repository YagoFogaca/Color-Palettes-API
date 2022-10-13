import shortid from 'shortid';
import * as emailValidator from 'email-validator';

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? shortid.generate().toUpperCase();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.palettes = user.palettes ?? [];
  }

  validateEmail() {
    if (!emailValidator.validate(this.email)) {
      throw new Error('Invalid email');
    }
  }

  validatePassword() {
    if (this.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
  }

  printUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      image: this.image,
      palettes: this.palettes,
    };
  }
}
