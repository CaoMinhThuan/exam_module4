"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRouter = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("../controllers/car.controller");
exports.addRouter = express_1.default.Router();
exports.addRouter.get('/', (req, res) => {
    res.render('create');
});
exports.addRouter.post('/', car_controller_1.CarManager.getListCar);
//# sourceMappingURL=add.router.js.map