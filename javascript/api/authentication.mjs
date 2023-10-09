const API_BASE_URL = "https://api.noroff.dev";
const action = "/api/v1/social/auth/register";
const method = "post";

/**
 * This function will register user to API
 */
export async function registerToAPI(profile) {
  const logInURL = API_BASE_URL + action;

  const response = await fetch(logInURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });
  const result = await response.json();
  alert("you are now Registered");
  return result;
}
