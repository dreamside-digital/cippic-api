module.exports = ({ env }) => ({
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          modelName: "article",
          fuzzysortOptions: {
            characterLimit: 5000,
            threshold: -2000,
            limit: 20,
            keys: [
              {
                name: "title",
                weight: 400,
              },
              {
                name: "author",
                weight: 200,
              },
              {
                name: "preview",
                weight: 300,
              },
              {
                name: "body",
                weight: 200,
              },
            ],
          },
        },
        {
          uid: "api::category.category",
          modelName: "category",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1500,
            limit: 5,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::content-type.content-type",
          modelName: "content-type",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1500,
            limit: 5,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::page.page",
          modelName: "page",
          fuzzysortOptions: {
            characterLimit: 3000,
            threshold: -3000,
            limit: 5,
            keys: [
              {
                name: "title",
                weight: 400,
              },
              {
                name: "subtitle",
                weight: 300,
              },
              {
                name: "body",
                weight: 200,
              },
            ],
          },
        }
      ],
    },
  }
});