const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const PostType = require('./types/PostType');
const PostService = require('../services/PostService'); // Corrigir o caminho

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return PostService.getPosts();
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return PostService.getPostById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        userId: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return PostService.createPost(args.title, args.content, args.userId);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
