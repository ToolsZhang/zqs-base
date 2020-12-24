"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("zqs-core/lib/db");
const schema = new db_1.Schema({
    name: {
        type: String,
        required: true,
    },
    info: String,
}, { timestamps: {} });
exports.default = db_1.Model({
    name: 'sample',
    auth: false,
    schema,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3NhbXBsZS9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFnRDtBQUVoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQU0sQ0FDdkI7SUFDRSxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUUsTUFBTTtDQUNiLEVBQ0QsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQ25CLENBQUM7QUFFRixrQkFBZSxVQUFLLENBQUM7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsS0FBSztJQUNYLE1BQU07Q0FDUCxDQUFDLENBQUMifQ==