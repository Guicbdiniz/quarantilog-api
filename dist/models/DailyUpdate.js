"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * Daily Update Class.
 * It represents a MongoDB collection (as every Schema does).
 */
class DailyUpdate {
    constructor() {
        const schema = new mongoose_1.Schema({
            author: { type: String, required: false },
            date: { type: String, required: true },
            message: { type: String, required: true }
        });
        this._model = mongoose_1.model('DailyUpdate', schema);
    }
    /**
     * Gets the DailyUpdate model.
     */
    get model() {
        return this._model;
    }
}
exports.DailyUpdate = DailyUpdate;
//# sourceMappingURL=DailyUpdate.js.map