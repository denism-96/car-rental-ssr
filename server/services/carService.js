import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const carsFilePath = path.resolve(__dirname, "../data/cars.json");

export function getCars() {
  const fileContent = fs.readFileSync(carsFilePath, "utf-8");
  return JSON.parse(fileContent);
}
