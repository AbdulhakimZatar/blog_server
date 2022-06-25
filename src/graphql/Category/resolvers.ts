import { pg } from "../../data";

const queries = {
  categories: () => {
    const SQL = `SELECT * FROM categories`;
    return pg.query(SQL).then((result) => result.rows);
  },
};

const mutations = {
  createCategory: async (root, args) => {
    const { name } = args;
    const SQL = `INSERT INTO categories (name) VALUES ($1) RETURNING id`;
    const values = [name];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
};

export const resolvers = { queries, mutations };
