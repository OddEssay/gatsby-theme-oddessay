module.exports = {
  siteMetadata: {
    title: `A Site By Paul Bennett-Freeman`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    "gatsby-transformer-typescript-css-modules",
    'gatsby-plugin-postcss',
  ],
}
