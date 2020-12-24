"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const authEnv = require("./auth");
const corsEnv = require("./cors");
const docsEnv = require("./docs");
const environment = require("./environment");
const httpEnv = require("./http");
const mongodbEnv = require("./mongodb");
const spdyEnv = require("./spdy");
const staticsEnv = require("./statics");
const env = environment[process.env.NODE_ENV];
exports.config = {
    root: env.root,
    port: env.port,
    ip: env.ip,
    domain: env.domain,
    mongodb: mongodbEnv[process.env.NODE_ENV],
    docs: docsEnv[process.env.NODE_ENV],
    auth: authEnv[process.env.NODE_ENV],
    statics: staticsEnv[process.env.NODE_ENV],
    http: httpEnv[process.env.NODE_ENV],
    cors: corsEnv[process.env.NODE_ENV],
    spdy: spdyEnv[process.env.NODE_ENV],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLDZDQUE2QztBQUM3QyxrQ0FBa0M7QUFDbEMsd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFFeEMsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsUUFBQSxNQUFNLEdBQVk7SUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0lBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0lBQ2QsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ1YsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ25DLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Q0FDcEMsQ0FBQyJ9