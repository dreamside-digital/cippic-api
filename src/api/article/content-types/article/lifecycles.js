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
    // run after article is published
    if (event.params.data.publishedAt) {
      const id = event.params.where.id

      // if date_published is manually set, use that date; otherwise use the default publishedAt
      let datePublished = event.params.data.date_published || event.params.data.publishedAt

      // insert directly into database to avoid entering an infinite loop
      const update = await strapi.db
        .connection("articles")
        .where({id: id})
        .update({ date_published: datePublished })
    }
  } 
};