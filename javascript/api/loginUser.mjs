import { API_BASE_URL } from "../constant/index.mjs";
import * as storage from "../storage/index.mjs";
import * as template from "../template/index.mjs";

const action = "/api/v1/social/auth/login";
const method = "POST";

/**
 * This function will log-in registered user to the website
 */
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
    template.redirectToHome();
  } else {
    console.log("you are not registered");
  }
}
