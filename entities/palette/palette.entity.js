import shortid from 'shortid';

export class PaletteEntity {
  constructor(palette) {
    this.id = palette.id ?? shortid.generate().toUpperCase();
    this.id_user = palette.id_user;
    this.colors = palette.colors ?? [];
    this.creationdate = palette.creationdate;
    this.likes = palette.likes ?? '0';
  }

  printPalette() {
    return {
      id: this.id,
      id_user: this.id_user,
      colors: this.colors,
      creationdate: this.creationdate,
      likes: this.likes,
    };
  }
}
