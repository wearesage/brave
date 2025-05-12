"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BraveService = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class BraveService {
    constructor() {
        this.baseUrl = "https://api.search.brave.com/res/v1/web/search";
        this.apiKey = process.env.BRAVE_SEARCH_API_KEY || "";
        if (!this.apiKey) {
            console.warn("BRAVE_API_KEY environment variable not set. Brave search will not work properly.");
        }
    }
    /**
     * Search the web using Brave Search API
     * @param query Search query
     * @param count Number of results to return (default: 10)
     * @returns Search results
     */
    async search(query, count = 10) {
        try {
            if (!this.apiKey) {
                throw new Error("Brave API key not configured");
            }
            const response = await axios_1.default.get(this.baseUrl, {
                params: {
                    q: query,
                    count: count,
                },
                headers: {
                    Accept: "application/json",
                    "X-Subscription-Token": this.apiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error("Error in Brave search:", error);
            throw error;
        }
    }
}
exports.BraveService = BraveService;
//# sourceMappingURL=brave.js.map