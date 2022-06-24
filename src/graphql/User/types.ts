export const types = `
  type User {
    id: ID!
    username: String!
    password: String
    posts: [Post!]
  }
`;