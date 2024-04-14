export interface Color {
  colorName: string;
  hexCode: string;
}

export interface Palette {
  id: number;
  paletteName: string;
  colors: Color[];
}

export type NewPalette = Omit<Palette, "id">;
