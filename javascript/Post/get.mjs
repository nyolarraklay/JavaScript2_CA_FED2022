import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";

const action ="/api/v1/social/posts";

export async function getPosts() {
    const getPostsURL = `${API_BASE_URL}${action}`;
   
    const response = await fetchTokens(getPostsURL,{
        method: 'GET', 
    });
    const getPosts = await response.json();
    return getPosts;
}

export async function getPost(id) {
    const getPostURL = `${API_BASE_URL}${action}/${id}`;
   
    const response = await fetchTokens(getPostURL,{
        method: 'GET', 
    });
    const getPost = await response.json();
    return getPost;
}