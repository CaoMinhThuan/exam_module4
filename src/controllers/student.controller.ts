import  {Student } from "../schemas/student.schema";

export class StudentManager {
    static getCretePage(req, res) {
        res.render('createStudent')
    }
    static async createStudent(req, res) {
        let { name, theoreticalPoint ,practicePoints,description,evaluate,classRoom} = req.body;
        let student = new Student({
            name:name,
            theoreticalPoint: theoreticalPoint,
            practicePoints: practicePoints,
            description: description,
            evaluate: evaluate,
            classRoom:classRoom
        });
        await student.save();
        res.redirect('/list');
    };
    static async getListStudent(req, res) {
        let students = await Student.find().sort({theoreticalPoint:1});
        res.render('listStudent',{students:students})
    }
    static async getUpdatePage(req, res) {
        let idStudent = req.params.id;
        let student = await Student.findOne({ _id: idStudent });
        if (student) {
            res.render('updateStudent',{data:student})
        }
    };
    
    static async updateStudent(req, res) {
        let idStudent = req.params.id;
        let student = await Student.findOne({_id:idStudent})
        if (student) {
            student.name = req.body.name;
            student.theoreticalPoint = req.body.theoreticalPoint;
            student.practicePoints = req.body.practicePoints;
            student.description = req.body.description;
            student.evaluate = req.body.evaluate;
            student.classRoom = req.body.classRoom;
            await student.save();
            res.redirect('/list')
        } else {
            res.redirect('/update')
        }
        
    };
    static async deleteStudent(req, res) {
        let idStudent = req.params.id;
        let student = await Student.findById(idStudent);
        if (student) {
            student.deleteOne();
            res.redirect('/list')
        }
    };
    static getPageInfoStudent(req, res) {
        res.render('detailStudent')
    };

    static async getInfoStudent(req, res) {
        let idStudent = req.params.id;
        let student = await Student.findOne({ _id: idStudent })
        if (student) { 
            res.render('detailStudent',{data:student})
        }
    };
}