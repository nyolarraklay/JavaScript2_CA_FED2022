import * as storage from "../storage/index.mjs";
import { getPostByUser, getPosts } from "../Post/get.mjs";
import * as listeners from "../eventListeners/index.mjs";




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
  date.innerText = postData.updated;

  user.append(post, date);
  userImageAndName.append(image, user);

  const postBody = document.createElement("p");
  postBody.classList.add("post");
  postBody.classList.add("card-text");
  postBody.innerText = postData.body;

  const editContainer = document.createElement("div");
  editContainer.classList.add("dotIcon");
  const icon = document.createElement("i");
  icon.classList.add("modalOne");
  icon.classList.add("bi");
  icon.classList.add("bi-three-dots");
  icon.dataset.bsToggle = "modal";
  icon.dataset.bsTarget = "#staticBackdrop";
  icon.dataset.bsId = postData.id;
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ms-3");
  deleteIcon.classList.add("bi");
  deleteIcon.classList.add("bi-x");
  deleteIcon.dataset.bsId = postData.id;
  
  editContainer.append(icon, deleteIcon);

  

  const cardTop = document.createElement("div");
  cardTop.classList.add("d-flex");
  cardTop.classList.add("justify-content-between");

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    cardTop.append(userImageAndName, editContainer);
    cardBody.append(cardTop);
    cardBody.append(postBody);
    cardBody.append(img);
    timeLinePosts.append(cardBody);
    listeners.setUpdatePostListener(icon);
    listeners.deletePostListener(deleteIcon);
   
    
    return timeLinePosts;
  }
}



export async function renderPostTemplates() {
  try {
    const publish = await getPosts();
    const publishContent = publish.map(postTemplate);
    const container = document.querySelector(".API-title");
    container.append(...publishContent);

    userIcon();

  } catch (error) {
    error;
  }
}

export async function renderPostTemplate() {
  const userProfileName = storage.load("profile");
  const userName = userProfileName.name;
    const publish = await getPostByUser();
    for (let i = 0; i < publish.length; i++) {
      const userPostAuthors = publish[i].author;
      
      const users = userPostAuthors.name;
    }

    let filteredPublish = publish.filter((user) => {
      return user.author.name === userName
    })
  
   
    const publishContent = filteredPublish.map(postTemplate);
    const container = document.querySelector(".API-title");

    container.append(...publishContent);
    userIcon();

}
    

    
 

export function userIcon() {
  const profilePic = storage.load("profile");
  

  const userName = document.querySelector(".userName");
  userName.innerHTML = profilePic.name;

  const userBanner = document.querySelector(".userBanner");
  const userImage = document.createElement("img");
  userImage.src = profilePic.banner;
  userBanner.prepend(userImage);

  const userAvatar = document.querySelector(".userAvatar");
  const avatar = document.createElement("img");
  avatar.src = profilePic.avatar;
  userAvatar.prepend(avatar);

  const userEmail = document.querySelector(".userEmail");
  userEmail.innerHTML = profilePic.email;
}


export function redirectToHome(postData) {
  location.href = "../../posts/index.html";
}



