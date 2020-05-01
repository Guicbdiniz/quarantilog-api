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
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/dailyupdate', DailyUpdatesRoutes_1.default);
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}.`);
});
//# sourceMappingURL=App.js.map