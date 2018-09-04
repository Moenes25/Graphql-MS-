import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { userType } from '../type';
import userModel from '../../../models/user';

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)

    }
  },
  resolve(root, params) {
    console.log(params.id);
    return userModel.findById(params.id).exec();
  }
}