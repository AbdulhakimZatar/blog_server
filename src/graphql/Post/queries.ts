export const queries = `
getPost(id: String!) : Post {
  id
  title
  body
  user {
    id
    name
  }
  category {
    id
    name
  }
  created_at
  updated_at
}
getPosts : [Post!]
`;
