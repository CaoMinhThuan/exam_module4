"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarManager = void 0;
const car_schema_1 = require("../schemas/car.schema");
class CarManager {
    static getCretePage(req, res) {
        res.render('createCar');
    }
    static async createCar(req, res) {
        let { _id, name, price, carManufacturer, description } = req.body;
        let car = new car_schema_1.Car({
            _id: _id,
            name: name,
            price: price,
            carManufacturer: carManufacturer,
            description: description
        });
        await car.save();
        res.redirect('/list');
    }
    ;
    static async getListCar(req, res) {
        let cars = await car_schema_1.Car.find();
        res.render('listCars', { cars: cars });
    }
    static async getUpdatePage(req, res) {
        let idCar = req.params.id;
        let car = await car_schema_1.Car.findOne({ _id: idCar });
        if (car) {
            res.render('updateCar', { data: car });
        }
    }
    ;
    static async updateCar(req, res) {
        let idCar = req.params.id;
        let car = await car_schema_1.Car.findOne({ _id: idCar });
        if (car) {
            car.name = req.body.name;
            car.carManufacturer = req.body.carManufacturer;
            car.price = req.body.price;
            car.description = req.body.description;
            await car.save();
            res.redirect('/list');
        }
        else {
            res.redirect('/update');
        }
    }
    ;
    static async deleteCar(req, res) {
        let idCar = req.params.id;
        let car = await car_schema_1.Car.findById(idCar);
        if (car) {
            car.deleteOne();
            res.redirect('/list');
        }
    }
    ;
    static getPageInfoCar(req, res) {
        res.render('detailCar');
    }
    ;
    static async getInfoCar(req, res) {
        let idCar = req.params.id;
        let car = await car_schema_1.Car.findOne({ _id: idCar });
        if (car) {
            res.render('detailCar', { data: car });
        }
    }
    ;
    static async getListCarBySort(req, res) {
        let cars = await car_schema_1.Car.find().sort({ price: 1 });
        res.render('listCars', { cars: cars });
    }
}
exports.CarManager = CarManager;
//# sourceMappingURL=car.controller.js.map