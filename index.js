/* global getAllPosts createPost */
const STORE = {};
const postTemplate = post => `<h1 onClick='onPostClick()'>${post.title}</h1>`;

const onPostClick = (e) => { STORE.clickedPost = e.target.innerText; render(); };
const render = () => { // maps Store to html=
  if (STORE.posts !== undefined) {
    const postsHtml = STORE.posts.map((p) => {
      const template = postTemplate(p);
      if (p.title === STORE.clickedPost) {
        return `<div style='color: red'>${template}</div>`;
      }
      return template;
    });
    document.body.innerHTML = postsHtml;
    document.body.addEventListener('click', onPostClick);
  } else {
    getAllPosts().then((posts) => {
      STORE.posts = posts;
      render();
    });
  }
};
// for example sake
createPost({ title: 'magic' });
createPost({ title: 'more magic' });

render();
