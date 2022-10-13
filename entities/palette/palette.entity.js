import shortid from 'shortid';

export class PaletteEntity {
  constructor(palette) {
    this.id = palette.id ?? shortid.generate().toUpperCase();
    this.id_user = palette.id_user;
    this.colors = palette.colors ?? {
      color1: palette.colors.color1,
      color2: palette.colors.color2,
      color3: palette.colors.color3 ?? '',
      color4: palette.colors.color4 ?? '',
    };
    this.creationdate = palette.creationdate;
  }

  printPalette() {
    return {
      id: this.id,
      id_user: this.id_user,
      colors: this.colors,
      creationdate: this.creationdate,
    };
  }
}
