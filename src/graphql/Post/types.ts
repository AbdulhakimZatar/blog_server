export const types = `
  type Post {
    id: ID!
    title: String!
    body: String
    user: User!
    category: Category
    comments: [Comment!]
    created_at: String
    updated_at: String
  }
`;