"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("zqs-core/lib/db");
const errors_1 = require("zqs-core/lib/errors");
const response_1 = require("zqs-core/lib/response");
const model_1 = require("./model");
class Controller {
    constructor() {
        // Gets a list of Models
        this.index = (ctx) => __awaiter(this, void 0, void 0, function* () {
            try {
                const paginateResult = yield db_1.paginate(model_1.default, ctx);
                response_1.response(ctx, 200, paginateResult);
            }
            catch (e) {
                errors_1.handleError(ctx, e);
            }
        });
        // Gets a single Model from the DB
        this.show = (ctx) => __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield db_1.show(model_1.default, ctx);
                if (!entity)
                    throw errors_1.Boom.notFound();
                response_1.response(ctx, 200, entity.toJSON({
                    virtuals: true,
                }));
            }
            catch (e) {
                errors_1.handleError(ctx, e);
            }
        });
        // Creates a new Model in the DB
        this.create = (ctx) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!ctx.request.fields)
                    throw errors_1.Boom.badData('Empty body');
                delete ctx.request.fields._id;
                const entity = yield model_1.default.create(ctx.request.fields);
                response_1.response(ctx, 201, entity);
            }
            catch (e) {
                errors_1.handleError(ctx, e);
            }
        });
        // Updates an existing Model in the DB
        this.update = (ctx) => __awaiter(this, void 0, void 0, function* () {
            try {
                delete ctx.request.fields._id;
                const entity = yield model_1.default.findById(ctx.params.id).exec();
                if (!entity)
                    throw errors_1.Boom.notFound();
                db_1.patchUpdates(entity, ctx.request.fields);
                yield entity.save();
                response_1.response(ctx, 200, entity);
            }
            catch (e) {
                errors_1.handleError(ctx, e);
            }
        });
        // Deletes a Model from the DB
        this.destroy = (ctx) => __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield model_1.default.findById(ctx.params.id).exec();
                if (!entity)
                    throw errors_1.Boom.notFound();
                yield entity.remove();
                response_1.response(ctx, 204);
            }
            catch (e) {
                errors_1.handleError(ctx, e);
            }
        });
    }
}
exports.default = new Controller();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvc2FtcGxlL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBK0Q7QUFDL0QsZ0RBQXdEO0FBQ3hELG9EQUFpRDtBQUNqRCxtQ0FBNEI7QUFFNUIsTUFBTSxVQUFVO0lBQWhCO1FBQ0Usd0JBQXdCO1FBQ2pCLFVBQUssR0FBRyxDQUFPLEdBQWEsRUFBRSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsTUFBTSxjQUFjLEdBQUcsTUFBTSxhQUFRLENBQUMsZUFBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRCxtQkFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDcEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixvQkFBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsa0NBQWtDO1FBQzNCLFNBQUksR0FBRyxDQUFPLEdBQWEsRUFBRSxFQUFFO1lBQ3BDLElBQUk7Z0JBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFJLENBQUMsZUFBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkMsbUJBQVEsQ0FDTixHQUFHLEVBQ0gsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUNILENBQUM7YUFDSDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLG9CQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixnQ0FBZ0M7UUFDekIsV0FBTSxHQUFHLENBQU8sR0FBYSxFQUFFLEVBQUU7WUFDdEMsSUFBSTtnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNO29CQUFFLE1BQU0sYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxtQkFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixvQkFBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsc0NBQXNDO1FBQy9CLFdBQU0sR0FBRyxDQUFPLEdBQWEsRUFBRSxFQUFFO1lBQ3RDLElBQUk7Z0JBQ0YsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkMsaUJBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLG1CQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM1QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLG9CQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRiw4QkFBOEI7UUFDdkIsWUFBTyxHQUFHLENBQU8sR0FBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE1BQU07b0JBQUUsTUFBTSxhQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixtQkFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNwQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLG9CQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=