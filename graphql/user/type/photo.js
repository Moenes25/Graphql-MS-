import {GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList

}from 'graphql';
import phototModel from'../../../models/photo';
import { resolve } from 'path';

export const photoType=new GraphQLObjectType({
  name:'photo',
  description:'photo api',
  fields:()=>({
      id:{
          type:new GraphQLNonNull(GraphQLID)
      },
   title:{
          type:GraphQLString
      },
      description:{
        type:GraphQLString
      }
         
})
});
export const photoInputType=new GraphQLInputObjectType({
  name:'photoInput',
  description:'Insert photo',
  fields:()=>({
      id:{
          type:GraphQLString
      },
   title:{
          type:GraphQLString
      },
      description:{
        type:GraphQLString
      }
     
 })

})