export function postTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card-body");

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
    timeLinePosts.append(userImageAndName);
    timeLinePosts.append(postBody);
    timeLinePosts.append(img);

    
      
    
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


