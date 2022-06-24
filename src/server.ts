import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";
import { Client } from "pg";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const pg = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

pg.connect().then(() => {
  server.listen().then(({ url }: { url: string }) => {
    console.log(`Server listening at ${url}`);
  });
});
