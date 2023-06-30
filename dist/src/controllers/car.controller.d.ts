export declare class CarManager {
    static getCretePage(req: any, res: any): void;
    static createCar(req: any, res: any): Promise<void>;
    static getListCar(req: any, res: any): Promise<void>;
    static getUpdatePage(req: any, res: any): Promise<void>;
    static updateCar(req: any, res: any): Promise<void>;
    static deleteCar(req: any, res: any): Promise<void>;
    static getPageInfoCar(req: any, res: any): void;
    static getInfoCar(req: any, res: any): Promise<void>;
    static getListCarBySort(req: any, res: any): Promise<void>;
}
