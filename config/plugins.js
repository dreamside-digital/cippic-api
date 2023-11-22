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
            limit: 20,
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
            threshold: -500,
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
            threshold: -500,
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
          uid: "api::contact-page.contact-page",
          modelName: "contact-page",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -500,
            limit: 1,
            keys: [
              {
                name: "title",
                weight: 200,
              },
              {
                name: "subtitle",
                weight: 100,
              },
              {
                name: "contact_options",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::about-page.about-page",
          modelName: "about-page",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -500,
            limit: 1,
            keys: [
              {
                name: "title",
                weight: 200,
              },
              {
                name: "subtitle",
                weight: 100,
              },
              {
                name: "team_members",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::donate-page.donate-page",
          modelName: "donate-page",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -500,
            limit: 1,
            keys: [
              {
                name: "title",
                weight: 200,
              },
              {
                name: "subtitle",
                weight: 100,
              },
              {
                name: "donation_sections",
                weight: 100,
              },
              {
                name: "instructions_title",
                weight: 100,
              },
              {
                name: "instructions_description",
                weight: 100,
              },
              {
                name: "how_to_donate",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::students-page.students-page",
          modelName: "students-page",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -500,
            limit: 1,
            keys: [
              {
                name: "title",
                weight: 200,
              },
              {
                name: "subtitle",
                weight: 100,
              },
              {
                name: "description",
                weight: 100,
              },
              {
                name: "student_programs",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  }
});