/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
export declare const Car: import("mongoose").Model<{
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
}> & Omit<{
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
}>> & Omit<import("mongoose").FlatRecord<{
    name?: string;
    price?: number;
    carManufacturer?: string;
    description?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>>;
