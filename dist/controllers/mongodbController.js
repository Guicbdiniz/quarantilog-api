"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DailyUpdate_1 = require("../models/DailyUpdate");
/**
 * Singleton class representing the connection to the MongoDB.
 * Usage:
 * 		Simply use the Models attribute to get the model to be used.
 * 		The model contains all the methods to act over the DB's documents.
 */
class DB {
    constructor() {
        mongoose_1.connect('mongodb://localhost:27017/quarantilog', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this._db = mongoose_1.connection;
        this._db.on('open', this.showConnectedMessage);
        this._db.on('error', this.showErrorMessage);
        this._models = {
            DailyUpdate: new DailyUpdate_1.DailyUpdate().model
        };
    }
    /**
     * Get all the DB related models.
     */
    static get Models() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._models;
    }
    /**
     * Print a connection message to the console.
     */
    showConnectedMessage() {
        console.log('Mongoose has connected');
    }
    /**
     * Print a connection error to the console.
     *
     * @param error - error message.
     */
    showErrorMessage(error) {
        console.log('Mongose has errored\n', error);
    }
}
exports.DB = DB;
//# sourceMappingURL=mongodbController.js.map