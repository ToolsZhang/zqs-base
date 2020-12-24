"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
const environment = require("./environment");
exports.development = [
    {
        endpoint: '/static',
        path: environment.development.root + '/static',
    },
];
exports.production = [
    {
        endpoint: '/static',
        path: environment.production.root + '/static',
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvc3RhdGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2Q0FBNkM7QUFFaEMsUUFBQSxXQUFXLEdBQWM7SUFDcEM7UUFDRSxRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsU0FBUztLQUMvQztDQUNGLENBQUM7QUFFVyxRQUFBLFVBQVUsR0FBYztJQUNuQztRQUNFLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTO0tBQzlDO0NBQ0YsQ0FBQyJ9