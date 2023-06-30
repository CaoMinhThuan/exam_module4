"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    carManufacturer: String,
    description: String
});
exports.Car = (0, mongoose_1.model)('car', carSchema);
//# sourceMappingURL=car.schema.js.map