'use strict';

/**
 * Drop.js controller
 *
 * @description: A set of functions called "actions" for managing `Drop`.
 */

module.exports = {

  /**
   * Retrieve drop records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.drop.search(ctx.query);
    } else {
      return strapi.services.drop.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a drop record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.drop.fetch(ctx.params);
  },

  /**
   * Count drop records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.drop.count(ctx.query);
  },

  /**
   * Create a/an drop record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.drop.add(ctx.request.body);
  },

  /**
   * Update a/an drop record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.drop.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an drop record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.drop.remove(ctx.params);
  },

  /**
   * Add relation to a/an drop record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.drop.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an drop record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.drop.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an drop record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.drop.removeRelation(ctx.params, ctx.request.body);
  }
};
