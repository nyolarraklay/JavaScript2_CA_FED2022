import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";
import * as template from "../template/index.mjs";

const action = "/api/v1/social/posts";

export async function updatePost(updatePostData) {
  const updatePostsURL = `${API_BASE_URL}${action}/${updatePostData.id}`;

  try {
    const response = await fetchTokens(updatePostsURL, {
      method: "PUT",
      body: JSON.stringify(updatePostData),
    });
  
    if (response.ok) {
      const update = await response.json();
      location.reload()
      return update
    }
  else {
    alert ("You are not allowed to edit other user's post")
  }

} catch (error){
console.error("forbidden");
}
};



