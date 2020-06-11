# gatsby-theme-oddessay

The theme that drives my websites.

Might be a useful reference for someone.

## ENV

`STRAPI_USER` needs to be set to the Strapi username.

`STRAPI_PASSWORD` needs to be set to the Strapi user's password.

`STRAPI_URL` is the url of the Strapi server.

# Adding Strapi Content Types

`gatsby-source-strapi.options.contentTypes` should be updated with any new content types as they are added.

## Commands

| Command          |                          |
| ---------------- | ------------------------ |
| `yarn storybook` | Runs and opens Storybook |
| `yarn develop`   | Runs Gatsby              |

# Building a new Gatsby Site with this theme

`gatsby new <name>`

`yarn install`

`yarn add https://github.com/OddEssay/gatsby-theme-oddessay`

# Keeping the Theme fresh with postinstall.sh

The postinstall step does two things:

- Copies in files that need to be in the root of the folder for gatsby to work correctly.
- Copies in config files that help keep the project and theme styles consistent.
