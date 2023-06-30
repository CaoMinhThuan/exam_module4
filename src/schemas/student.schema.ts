import { Schema, model } from "mongoose";
const studentSchema = new Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoints: Number,
    description: String,
    evaluate: String,
    classRoom:  String,

})
export const Student = model('student',studentSchema)