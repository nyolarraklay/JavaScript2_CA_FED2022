import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";

const action ="/api/v1/social/posts";

export async function updatePost(updatePostData) {
    const updatePostsURL = `${API_BASE_URL}${action}/${updatePostData.id}`;
   
    
    const response = await fetchTokens(updatePostsURL,{
        method: 'put',
        body: JSON.stringify(updatePostData)
    });
    const update = await response.json();

    
    return update;

}