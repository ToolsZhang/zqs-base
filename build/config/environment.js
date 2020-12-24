"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
const path_1 = require("path");
exports.development = {
    root: path_1.normalize(__dirname + '/../..'),
    port: 9000,
    ip: '0.0.0.0',
    domain: 'localhost',
};
exports.production = {
    root: path_1.normalize(__dirname + '/../..'),
    port: process.env.PORT || 8080,
    ip: process.env.IP || '0.0.0.0',
    domain: process.env.DOMAIN || 'localhost',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUVwQixRQUFBLFdBQVcsR0FBRztJQUN6QixJQUFJLEVBQUUsZ0JBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3JDLElBQUksRUFBRSxJQUFJO0lBQ1YsRUFBRSxFQUFFLFNBQVM7SUFDYixNQUFNLEVBQUUsV0FBVztDQUNwQixDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUc7SUFDeEIsSUFBSSxFQUFFLGdCQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNyQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSTtJQUM5QixFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksU0FBUztJQUMvQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksV0FBVztDQUMxQyxDQUFDIn0=