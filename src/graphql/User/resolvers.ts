import { pg } from "../../data";
import bcrypt from "bcrypt";

const queries = {
  user: async (root, args) => {
    const { id } = args;
    const SQL = `SELECT users.*,COALESCE(json_agg(posts.*) FILTER (WHERE posts.id IS NOT NULL), '[]') as posts FROM users FULL JOIN posts ON posts.user_id = users.id WHERE users.id = $1 GROUP BY users.id;`;
    const values = [id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
  users: async () => {
    const SQL = `SELECT users.*,COALESCE(json_agg(posts.*) FILTER (WHERE posts.id IS NOT NULL), '[]') as posts FROM users FULL JOIN posts ON posts.user_id = users.id GROUP BY users.id;`;
    return pg.query(SQL).then((result) => result.rows);
  },
};

const mutations = {
  createUser: async (root, args) => {
    const { username, password } = args;
    const SQL = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username`;
    const values = [username, await bcrypt.hashSync(password, 10)];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
};

export const resolvers = { queries, mutations };
