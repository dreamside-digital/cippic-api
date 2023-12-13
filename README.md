# CIPPIC CMS documentation

This is the developer documentation for the back end of CIPPIC's website. 

For more information and support please contact sharon@nomadiclabs.ca.

## Architecture and hosting

We're using Strapi for our headless CMS, and it's self-hosted on Digital Ocean. 

## Plugins

The only external plugin we're using is [strapi-plugin-fuzzy-search](https://github.com/DomDew/strapi-plugin-fuzzy-search) to generate our search results. It's configured at `config/plugins.js`.

## Content-Type Builder

To configure the content structure, you use Strapi's Content-Type Buider. The Content-Type Builder can only be edited in development mode, so you will need to set up a local development environment. 

The changes you make in the Content-Type Builder will generate the necessary files and migrations. You can also make content-type changes directly in the code, but it's generally easier and safer to do most changes through the UI. You will only need to touch the code if you're adding in a custom hook or controller, or configuring a plugin. 

## Local development

Prerequisites:
- Node 18
- npm or yarn
- postgres
- empty postgres database with an admin user

1. Clone the repo
```
git clone git@github.com:nomadic-labs/cippic-api.git
```
2. Install the dependencies
```
cd cippic-api && yarn
```
3. Create a root `.env` file and populate the following variables.  
```
HOST=
PORT=
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
JWT_SECRET=

```
4. Start the local server
```
yarn dev
```
5. (If making style changes) Start sass --watch
```
yarn sass
```

Refer to the [Strapi docs](https://docs.strapi.io/dev-docs/intro) for more information.

--------------------------------

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

