import { pg } from "../../data";

const mutations = {
  createComment: async (root, args) => {
    const { body, user_id, post_id } = args;
    const SQL = `INSERT INTO comments (body, user_id, post_id) VALUES ($1, $2, $3) RETURNING id`;
    const values = [body, user_id, post_id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
};

export const resolvers = { mutations };
