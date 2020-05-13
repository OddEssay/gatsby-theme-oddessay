module.exports = {
  siteMetadata: {
    title: `A Site By Paul Bennett-Freeman`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    "gatsby-transformer-typescript-css-modules",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`portfolio`, "short-urls"],
        //If using single types place them in this array.
        singleTypes: [],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASSWORD
        }
      }
    }
  ]
};
