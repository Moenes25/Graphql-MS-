import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import { userType, userInputType } from '../type';
import userModel from '../../../models/index';

export default {
  type: userType,
  args: {
    nom: {
      type: GraphQLString,
    },
    prenom: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLString,
    }

  },
  resolve(root, params) {
    const uModel = new userModel(params.data);
    const newuser = uModel.save();
    if (!newuser) {
      throw new Error('Error adding user');
    }
    return newuser;
  }
}