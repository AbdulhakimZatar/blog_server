import { pg } from "../../data";

const queries = {
  post: async (root, args) => {
    const { id } = args;
    const SQL = `SELECT posts.*, json_build_object('id',categories.id, 'name',categories.name) as category, json_build_object('id',users.id, 'username',users.username) as user FROM posts JOIN categories ON categories.id = posts.category_id JOIN users ON posts.user_id = users.id WHERE posts.id = $1 GROUP BY posts.id,categories.id,users.id;`;
    const values = [id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
  posts:async () => {
    const SQL = `SELECT posts.*, json_build_object('id',categories.id, 'name',categories.name) as category, json_build_object('id',users.id, 'username',users.username) as user FROM posts JOIN categories ON posts.category_id = categories.id JOIN users ON posts.user_id = users.id GROUP BY posts.id,categories.id,users.id;`;
    console.log(await pg.query(SQL).then((result) => result.rows))

    return pg.query(SQL).then((result) => result.rows);
  },
};

const mutations = {
  createPost: (root, args) => {
    const { title, body, user_id, category_id } = args;
    const SQL = `INSERT INTO posts (title, body, user_id, category_id) VALUES ($1, $2, $3, $4) RETURNING id`;
    const values = [title, body, user_id, category_id];
    return pg.query(SQL, values).then((result) => result.rows[0]);
  },
};

export const resolvers = { queries, mutations };
