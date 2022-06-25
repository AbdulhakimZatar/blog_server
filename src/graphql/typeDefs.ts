const { gql } = require('apollo-server');
import { User } from "./User";
import { Post} from './Post'
import { Category } from './Category';

const typeDefs = gql`
  ${User.types}
  ${Post.types}
  ${Category.types}

  type Query {
    ${Category.queries}
    ${User.queries}
    ${Post.queries}
  }
  
  type Mutation {
    ${Category.mutations}
    ${Post.mutations}
    ${User.mutations}
  }
`;

export default typeDefs;