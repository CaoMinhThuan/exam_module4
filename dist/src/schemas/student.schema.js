"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoints: Number,
    description: String,
    evaluate: String,
    classRoom: String,
});
exports.Student = (0, mongoose_1.model)('student', studentSchema);
//# sourceMappingURL=student.schema.js.map