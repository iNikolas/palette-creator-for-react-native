import axios from "axios";

import { Palette } from "../types";

const API_URL = "https://color-palette-api.kadikraman.now.sh/palettes";

export async function fetchColorPalettes(): Promise<Palette[]> {
  try {
    const response = await axios.get<Palette[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch color palettes");
  }
}
