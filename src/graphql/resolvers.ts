import { User } from './User'
import { Post} from './Post'
import { Category } from './Category';
import { Comment } from './Comment';

const resolvers = {
  Query: {
    ...User.resolvers.queries,
    // ...Post.resolvers.queries,
    ...Category.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Post.resolvers.mutations,
    ...Category.resolvers.mutations,
    ...Comment.resolvers.mutations
  }
};

export default resolvers;