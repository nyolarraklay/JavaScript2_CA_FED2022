import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";

const action ="/api/v1/social/posts";

export async function removePost(id) {
    const removePostsURL = `${API_BASE_URL}${action}/${id}`;
   
    
    const response = await fetchTokens(removePostsURL,{
        method: 'DELETE',
       
    });
    const remove = await response.json();

    
   if (response.ok) {
    
    return remove

 
   } else {
    alert ("You are forbidden to delete other user's post")
   }
}