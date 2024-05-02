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
      const article = await strapi.entityService.findOne("api::article.article", id)
      
      // default is to use the automated publishedAt date
      let datePublished = event.params.data.publishedAt

      // if the date_published was already manually set, keep using that
      if (article.date_published) {
        datePublished = article.date_published
      }

      // if the date_published is being updated, use the new date
      if (event.params.data.date_published) {
        datePublished = event.params.data.date_published
      }

      // insert directly into database to avoid entering an infinite loop
      const update = await strapi.db
        .connection("articles")
        .where({id: id})
        .update({ date_published: datePublished })
    }
  } 
};