import { pg } from "../../data";

const queries = {
  getPost: (root, args) => {
    const { id } = args;
    const SQL = `SELECT * FROM posts WHERE id = $1`;
    const values = [id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
  getPosts: () => {
    const SQL = `SELECT * FROM posts`;
    return pg.query(SQL).then((result) => result.rows);
  },
};

const mutations = {
  createPost: async (root, args) => {
    const { title, body, user_id, category_id } = args;
    const SQL = `INSERT INTO posts (title, body, user_id, category_id) VALUES ($1, $2, $3, $4) RETURNING id`;
    const values = [title, body, user_id, category_id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
};

export const resolvers = { queries, mutations };
