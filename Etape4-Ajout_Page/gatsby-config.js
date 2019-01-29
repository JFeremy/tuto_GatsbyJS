module.exports = {
    siteMetadata: {
      title: "Etape 4 : Ajout d'une page pour le détail des POIS"
    },
    plugins: [
      {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "DEMOCITYV4",
          // This is the field under which it's accessible
          fieldName: "democityv4",
          // URL to query from
          url: "https://demo-city-v4-itg.smartappscenter.com/contentdelivery/graphql",
        },
      }
    ]
  }