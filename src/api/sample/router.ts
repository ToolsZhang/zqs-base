import Controller from './controller';
import Model from './model';

export default Model.routes(
  '/api/samples',
  {
    path: '/',
    methods: ['get'],
    controller: Controller.index,
    tags: ['Sample'],
    summary: 'List documents',
    description: 'List documents',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [Model.docSchema.paginateOptions, Model.docSchema.filters],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Model.docSchema.paginateResult,
      },
      '4xx': Model.docSchema.response4xx,
      '5xx': Model.docSchema.response5xx,
    },
  },
  {
    path: '/',
    methods: ['post'],
    controller: Controller.create,
    tags: ['Sample'],
    summary: 'Create a document',
    description: 'Create a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      Model.docSchema.bodyWithOptions({
        exclude: '__auth __v _id createdAt updatedAt',
      }),
    ],
    responses: {
      201: {
        description: 'Successful operation',
        schema: Model.docSchema.result,
      },
      '4xx': Model.docSchema.response4xx,
      '5xx': Model.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['get'],
    controller: Controller.show,
    tags: ['Sample'],
    summary: 'Retrieve a document',
    description: 'Retrieve a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [Model.docSchema.showOptions, Model.docSchema.paramId],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Model.docSchema.result,
      },
      '4xx': Model.docSchema.response4xx,
      '5xx': Model.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['put', 'patch'],
    controller: Controller.update,
    tags: ['Sample'],
    summary: 'Modify a document',
    description: 'Modify a document',
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    parameters: [
      Model.docSchema.paramId,
      Model.docSchema.bodyWithOptions({
        exclude: '__auth __v _id createdAt updatedAt',
      }),
    ],
    responses: {
      200: {
        description: 'Successful operation',
        schema: Model.docSchema.result,
      },
      '4xx': Model.docSchema.response4xx,
      '5xx': Model.docSchema.response5xx,
    },
  },
  {
    path: '/:id',
    methods: ['delete'],
    controller: Controller.destroy,
    tags: ['Sample'],
    summary: 'Delete a document',
    description: 'Delete a document',
    produces: ['text/plain'],
    parameters: [Model.docSchema.paramId],
    responses: {
      204: {
        description: 'Successful operation',
      },
      '4xx': Model.docSchema.response4xx,
      '5xx': Model.docSchema.response5xx,
    },
  }
);
