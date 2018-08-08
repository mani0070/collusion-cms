'use strict';

/**
 * Collaborator.js controller
 *
 * @description: A set of functions called "actions" for managing `Collaborator`.
 */

module.exports = {

  /**
   * Retrieve collaborator records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.collaborator.search(ctx.query);
    } else {
      return strapi.services.collaborator.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a collaborator record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.collaborator.fetch(ctx.params);
  },

  /**
   * Count collaborator records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.collaborator.count(ctx.query);
  },

  /**
   * Create a/an collaborator record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.collaborator.add(ctx.request.body);
  },

  /**
   * Update a/an collaborator record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.collaborator.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an collaborator record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.collaborator.remove(ctx.params);
  },

  /**
   * Add relation to a/an collaborator record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.collaborator.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an collaborator record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.collaborator.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an collaborator record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.collaborator.removeRelation(ctx.params, ctx.request.body);
  }
};
