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
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: "1ieMf4t6JGERMdQb9nbluKehaNOixu0zI4ZC_YIInIIc",
        credentials: require("./keys.json"),
      },
    },
  ],
};

export default config;
