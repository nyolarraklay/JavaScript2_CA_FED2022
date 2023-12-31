import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";

const action = "/api/v1/social/posts";

/**
 * This will create a post using new data from a form
 * @param {object} createPostData This is the new data from a form
 */
export async function createPost(createPostData) {
  const createPostsURL = API_BASE_URL + action;

  const response = await fetchTokens(createPostsURL, {
    method: "POST",
    body: JSON.stringify(createPostData),
  });
  const post = await response.json();

  if (post) {
    return post;
  } else {
    console.warn("you are not allowed to edit this post");
  }
  return post;
}

export async function waitBeforeExecute(post) {
  const result = await createPost(post);
  if (result) {
    location.reload();
  } else {
    alert("Error");
  }
}
