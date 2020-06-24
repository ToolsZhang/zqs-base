import { IContext } from 'zqs-core/lib/context';
import { paginate, patchUpdates, show } from 'zqs-core/lib/db';
import { Boom, handleError } from 'zqs-core/lib/errors';
import { response } from 'zqs-core/lib/response';
import Model from './model';

class Controller {
  // Gets a list of Models
  public index = async (ctx: IContext) => {
    try {
      const paginateResult = await paginate(Model, ctx);
      response(ctx, 200, paginateResult);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Gets a single Model from the DB
  public show = async (ctx: IContext) => {
    try {
      const entity = await show(Model, ctx);
      if (!entity) throw Boom.notFound();
      response(
        ctx,
        200,
        entity.toJSON({
          virtuals: true,
        })
      );
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Creates a new Model in the DB
  public create = async (ctx: IContext) => {
    try {
      if (!ctx.request.fields) throw Boom.badData('Empty body');
      delete ctx.request.fields._id;
      const entity = await Model.create(ctx.request.fields);
      response(ctx, 201, entity);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Updates an existing Model in the DB
  public update = async (ctx: IContext) => {
    try {
      delete ctx.request.fields._id;
      const entity = await Model.findById(ctx.params.id).exec();
      if (!entity) throw Boom.notFound();
      patchUpdates(entity, ctx.request.fields);
      await entity.save();
      response(ctx, 200, entity);
    } catch (e) {
      handleError(ctx, e);
    }
  };

  // Deletes a Model from the DB
  public destroy = async (ctx: IContext) => {
    try {
      const entity = await Model.findById(ctx.params.id).exec();
      if (!entity) throw Boom.notFound();
      await entity.remove();
      response(ctx, 204);
    } catch (e) {
      handleError(ctx, e);
    }
  };
}

export default new Controller();
