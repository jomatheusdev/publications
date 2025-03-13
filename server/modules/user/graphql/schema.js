const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const UserType = require('./types/UserType');
const UserService = require('../services/UserService'); // Corrigir o caminho

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return UserService.getAllUsers();
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return UserService.getUserById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        return UserService.createUser(args.username, args.password);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
