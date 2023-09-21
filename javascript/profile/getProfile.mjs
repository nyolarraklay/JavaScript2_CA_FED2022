import { fetchTokens} from "../Post/fetchTokens.mjs";
import { API_BASE_URL} from "../constant/index.mjs";

const action ="/api/v1/social/profiles";

export async function getProfiles() {
    const getProfilesURL = `${API_BASE_URL}${action}`;
   
    const response = await fetchTokens(getProfilesURL);
    const readProfiles = await response.json();
    return readProfiles;
}

export async function getProfile(name ) {
    const getPostURL = `${API_BASE_URL}${action}/${name}`;
   
    const response = await fetchTokens(getPostURL);
    const readProfile = await response.json();
    return readProfile;
}