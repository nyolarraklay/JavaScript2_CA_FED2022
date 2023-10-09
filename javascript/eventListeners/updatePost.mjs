import { updatePost } from "../Post/update.mjs";

export async function setUpdatePostListener(icon) {
  const form = document.querySelector("#editPost");

  icon.addEventListener("click", (event) => {
    event.preventDefault();
    const icon = event.target;
    const dataSet = icon.dataset;
    const id = dataSet.bsId;
    const tags = [];

    if (form) {
     
      form.addEventListener("submit", (event) => {
        try {
          event.preventDefault();
          const form = event.target;
  
          const formData = new FormData(form);
          const post = Object.fromEntries(formData.entries());
          post.id = id;
          post.tags = tags;
          updatePost(post);
        } catch (error) {
        }
       
      });
    }
  });
}
