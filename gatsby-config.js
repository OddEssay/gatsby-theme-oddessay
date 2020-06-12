module.exports = {
    siteMetadata: {
        title: `A Site By Paul Bennett-Freeman`,
        description: 'A Gatsby theme created by Paul Bennett-Freeman',
        keywords: 'gatsby gatsby-theme oddessay',
        sections: [
            { title: 'About', link: '/about' },
            { title: '404', link: '/404' },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        'gatsby-transformer-typescript-css-modules',
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.STRAPI_URL,
                queryLimit: 1000, // Default to 100
                contentTypes: [`portfolio`, `short-urls`, `blog-posts`, `sites`],
                //If using single types place them in this array.
                singleTypes: [],
                // Possibility to login with a strapi user, when content types are not publically available (optional).
                loginData: {
                    identifier: process.env.STRAPI_USER,
                    password: process.env.STRAPI_PASSWORD,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/` } },
        {
            resolve: 'gatsby-background-image',
            options: {
                specialChars: '/:',
            },
        },
    ],
};