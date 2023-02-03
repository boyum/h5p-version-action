import * as core from "@actions/core";
import { readLibrary } from "./utils";

const options = {
  workingDirectory: "working-directory",
};

const outputs = {
  version: "version",
  versionFormatted: "version-formatted",
};

function getOptions(): {
  workingDirectory: string;
} {
  const workingDirectory = core.getInput(options.workingDirectory);

  return {
    workingDirectory,
  };
}

async function run(): Promise<void> {
  try {
    core.info("Getting options");
    const { workingDirectory } = getOptions();

    core.info("Finding library file");
    const library = await readLibrary(workingDirectory);

    const {
      majorVersion: major,
      minorVersion: minor,
      patchVersion: patch,
    } = library;

    core.info(`Outputting version info: ${major}.${minor}.${patch}`);
    core.setOutput(outputs.version, { major, minor, patch });
    core.setOutput(outputs.versionFormatted, `${major}.${minor}.${patch}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
