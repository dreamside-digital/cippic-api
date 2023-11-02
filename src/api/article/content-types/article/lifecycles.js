module.exports = {
  async beforeCreate(event) {

  // Generate slug using the 'plugin::content-manager.uid' service
    event.params.data.slug = await strapi.service('plugin::content-manager.uid').generateUIDField({
      contentTypeUID: "api::article.article",
      field: "slug",
      data: event.params.data
    })
  }
};