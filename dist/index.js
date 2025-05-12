"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bravePlugin = exports.BravePlugin = void 0;
const core_1 = require("@goat-sdk/core");
const tools_1 = require("./tools");
class BravePlugin extends core_1.PluginBase {
    constructor() {
        super("BravePlugin", [new tools_1.BraveTools()]);
        this.supportsChain = (chain) => true;
    }
}
exports.BravePlugin = BravePlugin;
const bravePlugin = () => new BravePlugin();
exports.bravePlugin = bravePlugin;
//# sourceMappingURL=index.js.map