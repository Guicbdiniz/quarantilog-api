"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const DailyUpdatesRoutes_1 = __importDefault(require("./routes/DailyUpdatesRoutes"));
const app = express_1.default();
const port = 3002;
// API middlewares.
app.use(cors_1.default());
app.use(express_1.default.json());
// API routes.
app.use('/dailyupdate', DailyUpdatesRoutes_1.default);
/**
 * Start listening in the selected port for API calls.
 */
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}.`);
});
//# sourceMappingURL=App.js.map