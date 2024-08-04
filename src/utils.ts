import fs from "node:fs";
import path from "node:path";
import type { H5PLibrary } from "h5p-types";

export async function readLibrary(directory: string): Promise<H5PLibrary> {
  const libraryPath = path.join(directory, "library.json");
  let libraryString: string;

  try {
    libraryString = (await fs.promises.readFile(libraryPath)).toString("utf-8");
  } catch (error) {
    console.error(error);
    throw new Error(`Could not find library file at '${libraryPath}'.`);
  }

  let library: H5PLibrary;

  try {
    library = JSON.parse(libraryString);
  } catch (error) {
    console.error(error);
    throw new Error("Could not parse library file.");
  }

  return library;
}
