"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodbController_1 = require("../controllers/mongodbController");
const router = express_1.Router();
router.post('/', function (req, res) {
    try {
        const dailyUpdate = new mongodbController_1.DB.Models.DailyUpdate({
            author: req.body.author,
            date: req.body.date,
            message: req.body.message
        });
        dailyUpdate.save((err) => {
            if (err) {
                res.status(400).json({ result: 'failure' });
            }
            else {
                res.status(200).json({ result: 'success' });
            }
        });
    }
    catch (e) {
        res.status(400).json({ result: 'failure' });
    }
});
router.get('/', function (req, res) {
    try {
        mongodbController_1.DB.Models.DailyUpdate.find((err, results) => {
            res.status(200).json({ results: results });
        });
    }
    catch (e) {
        res.status(400).json({ result: 'failure' });
    }
});
exports.default = router;
//# sourceMappingURL=DailyUpdatesRoutes.js.map