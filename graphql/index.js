

import {
  GraphQLObjectType,
  GraphQLSchema
} from'graphql';

import indexquery from './indexquery';
import indexmutations from './indexmutations';


export default new GraphQLSchema({
  query:new GraphQLObjectType({
      name:'Query',
      fields:indexquery
  }),
  mutation:new GraphQLObjectType({
    name:'Mutations',
    fields:indexmutations
})
  
});