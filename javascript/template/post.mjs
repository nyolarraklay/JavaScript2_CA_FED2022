import * as storage from "../storage/index.mjs";
import * as post from "../Post/index.mjs";
import * as listeners from "../eventListeners/index.mjs";
import * as sort from "../sort/index.mjs";
import { fetchTokens } from "../Post/fetchTokens.mjs";
import { API_BASE_URL } from "../constant/index.mjs";

const action = "/api/v1/social/posts";

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
  const imageContainer = document.createElement("a");
  imageContainer.href = `/posts/UserPost/index.html?id=${postData.id}`;

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("statusContainer");
  statusContainer.classList.add("mx-0");
  statusContainer.classList.add("px-0");
  statusContainer.classList.add("border-top");
  statusContainer.classList.add("border-bottom");
  statusContainer.classList.add("mt-2");
  const statusAction = document.createElement("div");
  statusAction.classList.add("statusAction");
  statusAction.classList.add("px-1");
  const like = document.createElement("button");
  like.classList.add("btn");
  like.type = "Submit";
  like.title = "Like this";
  like.innerText = `${postData._count.reactions} Likes`;
  const span1 = document.createElement("span");
  span1.innerText = "-";
  const comments = document.createElement("button");
  comments.classList.add("btn");
  comments.title = "Leave a comment";
  comments.innerText = `${postData._count.comments} Comments`;
  const span2 = document.createElement("span");
  span2.innerText = "-";
  const share = document.createElement("button");
  share.classList.add("btn");
  share.title = "Send this to friend or post it on your timeline";
  share.innerText = "Share";
  statusAction.append(like, span1, comments, span2, share);
  statusContainer.append(statusAction);

  const likeAndCommentContainer = document.createElement("div");
  likeAndCommentContainer.classList.add("likeAndCommentContainer");
  likeAndCommentContainer.classList.add("px-0");
  const likeAction = document.createElement("div");
  likeAction.classList.add("likeAction");
  likeAction.classList.add("d-flex");
  likeAction.classList.add("align-center");
  const commentBox = document.createElement("div");
  commentBox.classList.add("commentBox");
  postData.comments.forEach(post => {
    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("commentsContainer")
    commentsContainer.classList.add("border")
    commentsContainer.classList.add("rounded-pill")
    commentsContainer.classList.add("mt-1")
    const commentsAuthor = document.createElement("small");
    commentsAuthor.classList.add("mb-0")
    commentsAuthor.innerText = post.owner;
    const commentsFromUser = document.createElement("p");
    commentsFromUser.classList.add("mb-0")
    commentsFromUser.innerText = post.body;
    commentsContainer.append(commentsAuthor, commentsFromUser)
    commentBox.append(commentsContainer)
});

  const commentsForm = document.createElement("form");
  commentsForm.classList.add("mt-1");
  commentsForm.dataset.bsId = postData.id;
  const commentsgroup = document.createElement("div");
  commentsgroup.classList.add("form-group");
  const commentsLabel = document.createElement("label");
  commentsLabel.for = "";
  commentsLabel.innerText = "Write a Comment";
  const commentsTextarea = document.createElement("textarea");
  commentsTextarea.classList.add("form-control");
  commentsTextarea.classList.add("bg-light");
  commentsTextarea.name = "body";
  commentsTextarea.dataset.bsId = postData.id;
  const commentsButton = document.createElement("button");
  commentsButton.classList.add("btn");
  commentsButton.classList.add("btn-primary");
  commentsButton.classList.add("mt-1");
  commentsButton.type = "submit";
  commentsButton.innerText = "submit";
  commentsForm.append(
    commentsgroup,
    commentsLabel,
    commentsTextarea,
    commentsButton
  );
  commentBox.append(commentsForm);
  likeAndCommentContainer.append(likeAction, commentBox);

  if (commentsForm) {
    commentsForm.addEventListener("submit", (event) => {
      try {
        event.preventDefault();
        const form = event.target;
        const dataSet = form.dataset;
        const formID = dataSet.bsId;
        const formData = new FormData(form);
        const postComment = Object.fromEntries(formData.entries());

        async function commentPost(postComment, formID) {
          const createPostsURL = `${API_BASE_URL}${action}/${formID}/comment`;

          const response = await fetchTokens(createPostsURL, {
            method: "POST",
            body: JSON.stringify(postComment),
          });
          const result = await response.json();
          return result
        }

        commentPost(postComment, formID)
      } catch (error) {}
    });
  }

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    cardTop.append(userImageAndName, editContainer);
    cardBody.append(cardTop);
    cardBody.append(postBody);
    imageContainer.append(img);
    cardBody.append(imageContainer, statusContainer, likeAndCommentContainer);
    timeLinePosts.append(cardBody);
    listeners.setUpdatePostListener(icon);
    listeners.deletePostListener(deleteIcon);
    return timeLinePosts;
  }
}

export async function renderPostTemplates() {
  try {
    const publish = await post.getPostByUser();

    const publishContent = publish.map(postTemplate);
    const container = document.querySelector(".API-title");
    container.append(...publishContent);
    const sortDropdown = document.querySelector("p.oldestSort");
    sortDropdown.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sort.sortPostsOldestToNewest(publish);
      const sortedPostContent = sortedPost.map(postTemplate);
      container.innerHTML = "";
      container.append(...sortedPostContent);
    });

    const sortDropdownNewest = document.querySelector("p.newestSort");
    sortDropdownNewest.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sort.sortPostsNewestToOldest(publish);
      const sortedPostContent = sortedPost.map(postTemplate);
      container.innerHTML = "";
      container.append(...sortedPostContent);
    });

    userIcon();
  } catch (error) {
    error;
  }
}

export async function renderPostTemplate() {
  const userProfileName = storage.load("profile");
  const userName = userProfileName.name;
try {
  const publish = await post.getPostByUser();
  for (let i = 0; i < publish.length; i++) {
    const userPostAuthors = publish[i].author;
    const users = userPostAuthors.name;
  }

  let filteredPublish = publish.filter((user) => {
    return user.author.name === userName;
  });

  const publishContent = filteredPublish.map(postTemplate);
  const container = document.querySelector(".API-title");

  container.append(...publishContent);
  userIcon();
} catch (error) {
  alert("Something went wrong");
}
}

export async function userIcon() {
  const profilePic = storage.load("profile");

  const userName = document.querySelector(".userName");
  userName.innerHTML = profilePic.name;
  const users = profilePic.name;
  const followData = await post.followUserData(users);
  const followCount = followData._count;

  const userBanner = document.querySelector(".userBanner");
  const userImage = document.createElement("img");
  userImage.src = profilePic.banner;
  userBanner.prepend(userImage);

  const userAvatar = document.querySelector(".userAvatar");
  const avatar = document.createElement("img");
  avatar.src = profilePic.avatar;
  userAvatar.prepend(avatar);

  const userEmail = document.querySelector(".userEmail");
  userEmail.innerHTML = followData.email;

  const followers = document.querySelector(".followers");
  followers.innerText = `${followCount.followers} followers`;

  const following = document.querySelector(".following");
  following.innerText = `${followCount.followers} following`;
}



export function postDetailsFollowers(postData) {
     
  const timeLineCount = document.createElement("div");
  timeLineCount.classList.add("imageContainer")
  timeLineCount.classList.add("d-flex")
  const countBody = document.createElement("div");
  countBody.classList.add("card-body");

  
  
  const followerImage = document.createElement("img");
  followerImage.classList.add("rounded-circle");
  followerImage.classList.add("avatar");
  followerImage.title = postData.name;
  followerImage.src = postData.avatar;


  countBody.append(followerImage )
  timeLineCount.append(countBody)
  return timeLineCount
}
export function postDetailsTemplate(postData) {
  const detailedPost = document.createElement("div");
  
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
image.src = postData.avatar;

const user = document.createElement("div");
user.classList.add("ms-2");

const post = document.createElement("h5");
post.classList.add("post");
post.classList.add("card-title");
post.classList.add("m-0");
post.innerText = postData.owner;

const dateCreated = document.createElement("p");
dateCreated.classList.add("fs-8");
dateCreated.classList.add("m-0");
dateCreated.classList.add("text-body-secondary");
dateCreated.innerText = postData.created;

const dateUpdated = document.createElement("p");
dateUpdated.classList.add("fs-8");
dateUpdated.classList.add("m-0");
dateUpdated.classList.add("text-body-secondary");
dateUpdated.innerText = `${postData.updated} (updated)`;

user.append(post, dateCreated, dateUpdated);
userImageAndName.append(image, user);

const postTitle = document.createElement("h3");
postTitle.classList.add("post");
postTitle.classList.add("card-text");
postTitle.innerText = postData.title;

const postBody = document.createElement("p");
postBody.classList.add("post");
postBody.classList.add("card-text");
postBody.innerText = postData.body;

const cardTop = document.createElement("div");
cardTop.classList.add("d-flex");
cardTop.classList.add("justify-content-between");


if (postData.media !== undefined) {
  const img = document.createElement("img");
  img.classList.add("card-img-bottom");
  img.src = postData.media;
  img.alt = `Image from ${postData.title}`;
  cardTop.append(userImageAndName);
  cardBody.append(cardTop, postTitle, postBody, img);
  timeLinePosts.append(cardBody);
  detailedPost.append(timeLinePosts)
  return detailedPost;
}
}

export async function renderDetailPostTemplate() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
const container = document.querySelector(".API-title");
  const postName = await post.getPostByOtherUser(id);
  const userName = postName.author;
  const user = userName.name;
  const userPosts = await post.showUserPosts(user);
  
    const following = userPosts.following;
    const follower = userPosts.followers;
    const posts = userPosts.posts;
    

  const postDatas = posts.map(postDetailsTemplate);
  const followersData = follower.map(postDetailsFollowers);
  

  container.append(...postDatas);
  const followerContainer = document.createElement("div")
  followerContainer.classList.add("followerContainer")
  followerContainer.classList.add("border")
  followerContainer.innerText = "Followers:"
  followerContainer.append(...followersData);
  container.prepend(followerContainer);
  otherUserIcon();

  const sortDropdown = document.querySelector("p.oldestSort");
  sortDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    const sortedPost = sort.sortPostsOldestToNewest(showUserPosts);
    const sortedPostContent = sortedPost.map(postTemplate);
    container.innerHTML = "";
    container.append(...sortedPostContent);
  });

  const sortDropdownNewest = document.querySelector("p.newestSort");
  sortDropdownNewest.addEventListener("click", function (event) {
    event.preventDefault();
    const sortedPost = sort.sortPostsNewestToOldest(showUserPosts);
    const sortedPostContent = sortedPost.map(postTemplate);
    container.innerHTML = "";
    container.append(...sortedPostContent);
  });
}

export function redirectToHome(postData) {
  location.href = "../../posts/index.html";
}

export async function otherUserIcon() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const publish = await post.getPostByOtherUser(id);
  const author = publish.author;
  const users = author.name;
  const banner = author.banner;
  const avatarUser = author.avatar;
  const eMail = author.email;

  const followData = await post.followUserData(users);
  const followCount = followData._count;
  const followers = document.querySelector(".followers");
  followers.innerText = `${followCount.followers} followers`;

  const following = document.querySelector(".following");
  following.innerText = `${followCount.following} following`;

  const postsCount = document.querySelector(".followData");
  const posts = document.createElement("button");
  posts.classList.add("btn");
  posts.classList.add("text-primary");
  posts.innerHTML = `${followCount.posts} posts`;
  postsCount.append(posts);

  const userName = document.querySelector(".userName");
  userName.innerHTML = users;
  const follow = document.createElement("i");
  follow.classList.add("bi");
  follow.classList.add("bi-person-fill-add");
  follow.classList.add("fs-6");
  follow.classList.add("ms-3");
  userName.append(follow);

  const userBanner = document.querySelector(".userBanner");
  const userImage = document.createElement("img");
  userImage.src = banner;
  userBanner.prepend(userImage);

  const userAvatar = document.querySelector(".userAvatar");
  const avatar = document.createElement("img");
  avatar.src = avatarUser;
  userAvatar.prepend(avatar);

  const userEmail = document.querySelector(".userEmail");
  userEmail.innerHTML = eMail;

  follow.addEventListener("click", function () {
    post.followUser(users);
    unfollow(follow, users);
  });
}

function unfollow(follow, users) {
  follow.classList.remove("bi-person-fill-add");
  const unfollow = document.createElement("i");
  unfollow.classList.add("bi");
  unfollow.classList.add("bi-person-dash");
  unfollow.classList.add("fs-5");
  unfollow.classList.add("ms-3");
  follow.append(unfollow);

  unfollow.addEventListener("click", function () {
    post.unFollowUser(users);
    follow.remove(unfollow);
  });
}
