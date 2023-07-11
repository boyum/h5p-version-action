# h5p-version-action

This action reads the version number from `library.json` in an H5P project and outputs that version number.

## Usage

### Options

| Name                | Required | Default value | Description                                                                        |
| ------------------- | -------- | ------------- | ---------------------------------------------------------------------------------- |
| `working-directory` | false    | `.`           | The directory where the library.json file is located, relative to the Git project. |

### Outputs

| Name                | Description                                                                         | Example                              |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| `version`           | The main version as a JSON string with the properties `major`, `minor`, and `patch` | `"{ major: 1, minor: 2, patch: 3 }"` |
| `version-formatted` | The main version as a string on the format `major.minor.patch`                      | `"1.2.3"`                            |

## Development

### Releasing new versions

Before releasing a new version, make sure to run `npm run all` to build and package files.

#### Create release

Each release has its own Git _tag_. Do these steps to create a new release:

1. Create the tag: `git tag <version>`
1. Push the tag to origin: `git push origin <version>`
