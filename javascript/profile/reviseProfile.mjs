import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";

const action ="/api/v1/social/profiles";

export async function updateProfile(profileData) {
    console.log(profileData);
    const updateProfileURL = `${API_BASE_URL}${action}/${profileData.name}/media`;
   
    
    const response = await fetchTokens(updateProfileURL,{
        method: 'PUT',
        body: JSON.stringify(profileData)
    });
    const reviseProfile = await response.json();

    
    return reviseProfile;

}