import { API_BASE_URL} from "../constant/index.mjs"
import * as storage from "../storage/index.mjs";


const action = "/api/v1/social/auth/login";
const method = "POST";



export async function logIn(userData) {
  const logInURL = API_BASE_URL + action;


  const response = await fetch(logInURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(userData),
  });

  const { accessToken, ...user } = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);
  
  if (response.status === 200) {
    location.href='post/index.html';
    userIcon();
  } else {
    console.log('you are not registered');
  }

  
}

function userIcon() {
  const profilePic = storage.load("profile");
const userPicture = document.querySelector(".profileName");

      userPicture.innerHTML = JSON.stringify(profilePic.name)

}