import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';
import usertModel from '../../../models/user';
import { resolve } from 'path';

export const userType = new GraphQLObjectType({
  name: 'user',
  description: 'user api',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    nom: {
      type: GraphQLString,
      resolve: data => data.nom
    },
    prenom: {
      type: GraphQLString,
      resolve: data => data.prenom
    },
    age: {
      type: GraphQLString,
      resolve: data => data.age
    }
  })
});
export const userInputType = new GraphQLInputObjectType({
  name: 'userInput',
  description: 'Insert user',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    nom: {
      type: GraphQLString
    },
    prenom: {
      type: GraphQLString
    },
    age: {
      type: GraphQLString
    }
  })
})
