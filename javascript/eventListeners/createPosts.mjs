import * as template from "../template/index.mjs";
import { createPost, waitBeforeExecute } from "../Post/create.mjs";


export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      waitBeforeExecute(post);
    
    });
   
  }
  
}


