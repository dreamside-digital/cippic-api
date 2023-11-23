module.exports = ({ env }) => ({
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          modelName: "article",
          fuzzysortOptions: {
            characterLimit: 1000,
            threshold: -2000,
            limit: 20,
            keys: [
              {
                name: "title",
                weight: 300,
              },
              {
                name: "preview",
                weight: 200,
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
            threshold: -1500,
            limit: 5,
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
            threshold: -1500,
            limit: 5,
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
          uid: "api::students-page.students-page",
          modelName: "students-page",
          fuzzysortOptions: {
            threshold: -1000,
            limit: 1,
            keys: [
              {
                name: "title",
                weight: 500,
              },
              {
                name: "subtitle",
                weight: 200,
              },
              {
                name: "description",
                weight: 100,
              }
            ],
          },
        },
        {
          uid: "api::about-page.about-page",
          modelName: "about-page",
          fuzzysortOptions: {
            threshold: -1000,
            keys: [
              {
                name: "title",
                weight: 400,
              },
              {
                name: "subtitle",
                weight: 100,
              }
            ],
          },
        },
        {
          uid: "api::contact-page.contact-page",
          modelName: "contact-page",
          fuzzysortOptions: {
            threshold: -1000,
            keys: [
              {
                name: "title",
                weight: 400,
              },
              {
                name: "subtitle",
                weight: 100,
              }
            ],
          },
        },
        {
          uid: "api::donate-page.donate-page",
          modelName: "donate-page",
          fuzzysortOptions: {
            threshold: -1000,
            keys: [
              {
                name: "title",
                weight: 400,
              },
              {
                name: "subtitle",
                weight: 100,
              }
            ],
          },
        },
      ],
    },
  }
});