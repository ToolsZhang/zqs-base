"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const model_1 = require("./model");
exports.default = model_1.default.routes('/api/samples', {
    path: '/',
    methods: ['get'],
    controller: controller_1.default.index,
    tags: ['Sample'],
    summary: 'List documents',
    description: 'List documents',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [model_1.default.docSchema.paginateOptions, model_1.default.docSchema.filters],
    responses: {
        200: {
            description: 'Successful operation',
            schema: model_1.default.docSchema.paginateResult,
        },
        '4xx': model_1.default.docSchema.response4xx,
        '5xx': model_1.default.docSchema.response5xx,
    },
}, {
    path: '/',
    methods: ['post'],
    controller: controller_1.default.create,
    tags: ['Sample'],
    summary: 'Create a document',
    description: 'Create a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
        model_1.default.docSchema.bodyWithOptions({
            exclude: '__auth __v _id createdAt updatedAt',
        }),
    ],
    responses: {
        201: {
            description: 'Successful operation',
            schema: model_1.default.docSchema.result,
        },
        '4xx': model_1.default.docSchema.response4xx,
        '5xx': model_1.default.docSchema.response5xx,
    },
}, {
    path: '/:id',
    methods: ['get'],
    controller: controller_1.default.show,
    tags: ['Sample'],
    summary: 'Retrieve a document',
    description: 'Retrieve a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [model_1.default.docSchema.showOptions, model_1.default.docSchema.paramId],
    responses: {
        200: {
            description: 'Successful operation',
            schema: model_1.default.docSchema.result,
        },
        '4xx': model_1.default.docSchema.response4xx,
        '5xx': model_1.default.docSchema.response5xx,
    },
}, {
    path: '/:id',
    methods: ['put', 'patch'],
    controller: controller_1.default.update,
    tags: ['Sample'],
    summary: 'Modify a document',
    description: 'Modify a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
        model_1.default.docSchema.paramId,
        model_1.default.docSchema.bodyWithOptions({
            exclude: '__auth __v _id createdAt updatedAt',
        }),
    ],
    responses: {
        200: {
            description: 'Successful operation',
            schema: model_1.default.docSchema.result,
        },
        '4xx': model_1.default.docSchema.response4xx,
        '5xx': model_1.default.docSchema.response5xx,
    },
}, {
    path: '/:id',
    methods: ['delete'],
    controller: controller_1.default.destroy,
    tags: ['Sample'],
    summary: 'Delete a document',
    description: 'Delete a document',
    produces: ['text/plain'],
    parameters: [model_1.default.docSchema.paramId],
    responses: {
        204: {
            description: 'Successful operation',
        },
        '4xx': model_1.default.docSchema.response4xx,
        '5xx': model_1.default.docSchema.response5xx,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9zYW1wbGUvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLG1DQUE0QjtBQUU1QixrQkFBZSxlQUFLLENBQUMsTUFBTSxDQUN6QixjQUFjLEVBQ2Q7SUFDRSxJQUFJLEVBQUUsR0FBRztJQUNULE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoQixVQUFVLEVBQUUsb0JBQVUsQ0FBQyxLQUFLO0lBQzVCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNoQixPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7SUFDakQsUUFBUSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7SUFDakQsVUFBVSxFQUFFLENBQUMsZUFBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsZUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDdEUsU0FBUyxFQUFFO1FBQ1QsR0FBRyxFQUFFO1lBQ0gsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxNQUFNLEVBQUUsZUFBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjO1NBQ3ZDO1FBQ0QsS0FBSyxFQUFFLGVBQUssQ0FBQyxTQUFTLENBQUMsV0FBVztRQUNsQyxLQUFLLEVBQUUsZUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXO0tBQ25DO0NBQ0YsRUFDRDtJQUNFLElBQUksRUFBRSxHQUFHO0lBQ1QsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pCLFVBQVUsRUFBRSxvQkFBVSxDQUFDLE1BQU07SUFDN0IsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxRQUFRLEVBQUUsQ0FBQyxrQkFB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