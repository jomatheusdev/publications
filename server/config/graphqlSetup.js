const { graphqlHTTP } = require('express-graphql');
const { mergeSchemas } = require('@graphql-tools/schema');
const userSchema = require('../modules/user/graphql/schema');
const postSchema = require('../modules/post/graphql/schema');

const setupGraphQL = (app) => {
  const schema = mergeSchemas({
    schemas: [userSchema, postSchema]
  });

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));
};

module.exports = setupGraphQL;
