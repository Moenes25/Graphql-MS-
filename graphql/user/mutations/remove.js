import {
  GraphQLNonNull
}from'graphql';


import{userType,userInputType}from '../../user/type/index';
import userModel from'../../../models/user';
import { GraphQLID } from 'graphql/type/scalars';
export default{
  type:userType,
  args:{
      id:{
          name:'id',
          type:new GraphQLNonNull(GraphQLID)
      }
  },
  resolve(root,params){
      const removeduser=new userModel.findByIdAndRemove(params.id).exec();
      
      if(!removeduser){
          throw new Error('Error removing user');
      }
return removeduser;
  }
}