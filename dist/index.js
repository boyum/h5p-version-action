import './sourcemap-register.cjs';/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (undefined && undefined.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (undefined && undefined.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const utils_1 = require("./utils");
const options = {
    workingDirectory: "working-directory",
};
const outputs = {
    version: "version",
    versionFormatted: "version-formatted",
};
function getOptions() {
    const workingDirectory = core.getInput(options.workingDirectory);
    return {
        workingDirectory,
    };
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            core.info("Getting options");
            const { workingDirectory } = getOptions();
            core.info("Finding library file");
            const library = yield (0, utils_1.readLibrary)(workingDirectory);
            const { majorVersion: major, minorVersion: minor, patchVersion: patch, } = library;
            core.info(`Outputting version info: ${major}.${minor}.${patch}`);
            core.setOutput(outputs.version, { major, minor, patch });
            core.setOutput(outputs.versionFormatted, `${major}.${minor}.${patch}`);
        }
        catch (error) {
            if (error instanceof Error) {
                core.setFailed(error.message);
            }
        }
    });
}
run();


//# sourceMappingURL=index.js.map