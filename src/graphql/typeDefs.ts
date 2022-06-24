const { gql } = require('apollo-server');
import { User } from "./User";

const typeDefs = gql`
  ${User.types}
  
  type Query {
    ${User.queries}
  }
  
  type Mutation {
    ${User.mutations}
  }
`;

export default typeDefs;