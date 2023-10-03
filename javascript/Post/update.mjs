import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";
import * as template from "../template/index.mjs";

const action = "/api/v1/social/posts";
const profiles = "/api/v1/social/profiles/";

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

export async function followUser(users) {
  const getPostsURL = `${API_BASE_URL}${profiles}${users}/follow`;
 
  const response = await fetchTokens(getPostsURL,{
      method: 'PUT',
      body: JSON.stringify(getPostsURL), 
    
  });
  

  if (response.ok) {
    const update = await response.json();
    
    return update
  }
}

export async function unFollowUser(users) {
  const getPostsURL = `${API_BASE_URL}${profiles}${users}/unfollow`;
 
  const response = await fetchTokens(getPostsURL,{
      method: 'PUT', 
      body: JSON.stringify(getPostsURL),
  });


  if (response.ok) {
    const update = await response.json();
    
    return update
  }
} 

