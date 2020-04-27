"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodbController_1 = require("../controllers/mongodbController");
const router = express_1.Router();
router.post('/', function (req, res) {
    try {
        console.log('Chegou');
        const dailyUpdate = new mongodbController_1.DB.Models.DailyUpdate({
            author: req.body.author,
            date: req.body.date,
            message: req.body.message
        });
        dailyUpdate.save((err) => {
            if (err) {
                res.status(400).json({ resulst: 'failure' });
            }
            else {
                res.status(200).json({ resulst: 'success' });
            }
        });
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
//# sourceMappingURL=DailyUpdatesRoutes.js.map