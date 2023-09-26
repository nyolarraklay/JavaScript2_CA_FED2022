import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";

const action = "/api/v1/social/posts";

export async function createPost(createPostData) {
  const createPostsURL = API_BASE_URL + action;

  const response = await fetchTokens(createPostsURL, {
    method: "POST",
    body: JSON.stringify(createPostData),
  });
  const post = await response.json();
  return post;
}
