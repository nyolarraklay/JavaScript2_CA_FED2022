import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";
import * as template from "../template/index.mjs";

const action = "/api/v1/social/posts";

export async function updatePost(updatePostData) {
  const updatePostsURL = `${API_BASE_URL}${action}/${updatePostData.id}`;

  const response = await fetchTokens(updatePostsURL, {
    method: "PUT",
    body: JSON.stringify(updatePostData),
  });
  const update = await response.json();

  // return update;

  if (response.status === 200) {
    template.redirectToHome();
  } else {
    console.warn("you are not allowed to edit this post");
  }
}
