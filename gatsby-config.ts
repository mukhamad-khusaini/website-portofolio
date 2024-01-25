import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Website-Portofolio`,
    siteUrl: `https://www.yourdomain.tld`,
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
        spreadsheetName: "achivementInput",
        credentials: require("./keys.json"),
      },
    },
  ],
};

export default config;
