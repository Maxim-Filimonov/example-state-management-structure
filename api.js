const mockDb = [];

const createPost = post => new Promise((resolve, reject) => {
  mockDb.push(post);
  resolve(post);
});
const getAllPosts = () => Promise.resolve(mockDb);
