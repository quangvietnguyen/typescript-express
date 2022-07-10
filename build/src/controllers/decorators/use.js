"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middelwares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middelware, target, key) || [];
        middelwares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middelware, middelwares, target, key);
    };
}
exports.use = use;
