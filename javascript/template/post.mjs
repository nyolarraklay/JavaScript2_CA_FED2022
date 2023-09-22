import * as storage from "../storage/index.mjs"

export function postTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card");
  timeLinePosts.classList.add("mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const userImageAndName = document.createElement("div");
  userImageAndName.classList.add("d-flex");
  const image = document.createElement("img");
  image.classList.add("rounded-circle");
  image.classList.add("avatar");
  image.src = "https://source.unsplash.com/random/30";
  
  const user = document.createElement("div");
  user.classList.add("ms-2");
  
  const post = document.createElement("h5");
  post.classList.add("post");
  post.classList.add("card-title");
  post.classList.add("m-0");
  post.innerText = postData.title;

  const date = document.createElement("p");
  date.classList.add("fs-8");
  date.classList.add("m-0");
  date.classList.add("text-body-secondary");
  date.innerText = postData.updated

user.append(post,date)
userImageAndName.append(image,user)

  const postBody = document.createElement("p");
  postBody.classList.add("post");
  postBody.classList.add("card-text");
  postBody.innerText = postData.body;

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom")
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    cardBody.append(userImageAndName);
    cardBody.append(postBody);
    cardBody.append(img);
    timeLinePosts.append(cardBody);
    
      
    
    return timeLinePosts;
  }
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataLists, parent) {
 
for (let i= 0;i < postDataLists.length; i++) {
    const data = postDataLists[i];

        parent.append(postTemplate(data)) 
} 
}

export function userIcon() {
  const profilePic = storage.load("profile");
const userPicture = document.querySelector(".profileName");
console.log(profilePic);
      userPicture.innerHTML = JSON.stringify(profilePic.name)

}

export function redirectToHome() {
  location.href ="../../posts/index.html";
  
}