import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";
import { pg } from "./data";
console.log(typeDefs, resolvers);
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

pg.connect().then(() => {
  server.listen().then(({ url }: { url: string }) => {
    console.log(`Server listening at ${url}`);
  });
});
