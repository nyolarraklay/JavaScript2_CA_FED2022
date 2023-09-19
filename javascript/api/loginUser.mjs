import * as storage from "../storage/index.mjs";

const API_BASE_URL = "https://api.noroff.dev";
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
  alert("you are now logged in");
}
