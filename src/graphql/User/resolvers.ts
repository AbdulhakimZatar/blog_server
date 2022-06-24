import { pg } from "../../data";
import bcrypt from "bcrypt";

const queries = {
  getUser: (root, args) => {
    const { id } = args;
    const SQL = `SELECT * FROM users WHERE id = $1`;
    const values = [id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
  getUsers: () => {
    const SQL = `SELECT * FROM users`;
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
