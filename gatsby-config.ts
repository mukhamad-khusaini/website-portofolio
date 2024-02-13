import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portofolio Mukhamad Khusaini`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Portofolio | Mukhamad Khusaini`,
        short_name: `webMukhamadKhusaini`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#DFD42B`,
        display: `standalone`,
        icon: "src/images/fav.png",
      },
    },
  ],
};

export default config;
