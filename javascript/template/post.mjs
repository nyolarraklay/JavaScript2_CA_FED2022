export function postTemplate(postData) {
   const post = document.createElement("div");
   post.classList.add("post");
   post.innerText = postData.title;

   if(postData.media) {
    const img = document.createElement('img');
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
   }

   return post;
}

export function rendeerPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataLists, parent) {
    const postHTMLElements = postDataLists.map(postTemplate)
    parent.append(...postHTMLElements)
}