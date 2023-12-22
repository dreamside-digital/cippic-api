module.exports = {
  async beforeCreate(event) {

    // Generate slug using the 'plugin::content-manager.uid' service
    event.params.data.slug = await strapi.service('plugin::content-manager.uid').generateUIDField({
      contentTypeUID: "api::article.article",
      field: "slug",
      data: event.params.data
    })
  },
  async afterUpdate(event) {
    // set date_published to publishedAt if it is not otherwise defined
    if (!event.params.data.date_published) {
      const id = event.params.where.id
      const publishedAt = event.params.data.publishedAt

      // insert directly into database to avoid entering an infinite loop
      const update = await strapi.db
        .connection("articles")
        .where({id: id})
        .update({ date_published: publishedAt })
    }
  } 
};