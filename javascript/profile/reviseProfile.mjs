import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";
import { save, remove} from "../storage/index.mjs";

const action ="/api/v1/social/profiles";

export async function updateProfile(profile) {
    const updateProfileURL = `${API_BASE_URL}${action}/${profile.name}/media`;
   
    
    const response = await fetchTokens(updateProfileURL,{
        method: 'PUT',
        body: JSON.stringify(profile)
    });

    const updateProfile = await response.json()
    
     return updateProfile

}


export async function waitBeforeExecute(profile) {
    const result = await updateProfile(profile);
    if (result) {
      location.href = "../../posts/index.html";
    } else {
      alert("Error");
    }
  }