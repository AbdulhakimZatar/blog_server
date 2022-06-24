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
    ${User.queries}
    ${Post.queries}
    ${Category.queries}
  }
  
  type Mutation {
    ${User.mutations}
    ${Post.mutations}
    ${Category.mutations}
    ${Comment.mutations}
  }
`;

export default typeDefs;