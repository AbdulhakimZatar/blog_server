const { gql } = require('apollo-server');
import { User } from "./User";
import { Post} from './Post'
import { Category } from './Category';
import { Comment } from './Comment';

const typeDefs = gql`
  ${User.types}
  ${Post.types}
  ${Category.types}
  ${Comment.types}

  type Query {
    ${Category.queries}
    ${User.queries}
    ${Post.queries}
  }
  
  type Mutation {
    ${Category.mutations}
    ${Comment.mutations}
    ${Post.mutations}
    ${User.mutations}
  }
`;

export default typeDefs;