module.exports = {
  siteMetadata: {
    title: `Khanhx Blog`,
    name: `Khanh Chau`,
    siteUrl: `http://localhost`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/khanhx`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/viperskye`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/khanh-chau/`,
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
