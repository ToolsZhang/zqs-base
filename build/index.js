"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zqs_core_1 = require("zqs-core");
const config_1 = require("./config");
try {
    zqs_core_1.Zqs.create(__dirname, config_1.config).start();
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBK0I7QUFDL0IscUNBQWtDO0FBRWxDLElBQUk7SUFDRixjQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUN2QztBQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNsQiJ9