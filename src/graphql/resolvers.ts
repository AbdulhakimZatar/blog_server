import { User } from './User'
import { Post} from './Post'
import { Category } from './Category';

const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Post.resolvers.queries,
    ...Category.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Post.resolvers.mutations,
    ...Category.resolvers.mutations,
  }
};

export default resolvers;