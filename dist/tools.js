"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BraveTools = exports.WebSearchParameters = void 0;
const core_1 = require("@goat-sdk/core");
const core_2 = require("@goat-sdk/core");
const zod_1 = require("zod");
const brave_1 = require("./services/brave");
class WebSearchParameters extends (0, core_2.createToolParameters)(zod_1.z.object({
    query: zod_1.z.string(),
    count: zod_1.z.number().optional().default(5)
})) {
}
exports.WebSearchParameters = WebSearchParameters;
const service = new brave_1.BraveService();
class BraveTools {
    async searchWeb({ query, count }) {
        const results = await service.search(query, count);
        return results;
    }
}
exports.BraveTools = BraveTools;
__decorate([
    (0, core_1.Tool)({
        name: "search_web",
        description: "Search the web for anything.",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebSearchParameters]),
    __metadata("design:returntype", Promise)
], BraveTools.prototype, "searchWeb", null);
//# sourceMappingURL=tools.js.map