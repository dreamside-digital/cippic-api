module.exports = ({ env }) => ({
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          modelName: "article",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "title",
                weight: 300,
              },
              {
                name: "preview",
                weight: -100,
              },
              {
                name: "body",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::category.category",
          modelName: "category",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: -200,
              },
            ],
          },
        },
        {
          uid: "api::content-type.content-type",
          modelName: "content-type",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "description",
                weight: -200,
              },
            ],
          },
        },
      ],
    },
  }
});