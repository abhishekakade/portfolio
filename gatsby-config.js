module.exports = {
  siteMetadata: {
    title: `Abhishek's Portfolio`,
    description: `Abhishek Kakade, Front-End Developer specializing in JavaScript and React.`,
    author: `@abhishekakade`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abhishek's Portfolio`,
        short_name: `Abhishek's Portfolio`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        // icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
