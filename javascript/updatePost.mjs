import { getPost } from "./Post/get.mjs";
import { updatePost } from "./Post/update.mjs";

export async function setUpdatePostListener(icon) {
  const form = document.querySelector("#editPost");

  icon.addEventListener("click", (event) => {
    event.preventDefault();
    const icon = event.target;
    const dataSet = icon.dataset;
    const id = dataSet.bsId;

    if (form) {
      const button = form.querySelector("button");
      button.disabled = true;

      const post = getPost(id);

      form.title.value = post.title;
      form.body.value = post.body;

      button.disabled = false;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        post.id = id;

        updatePost(post);
      });
    }
  });
}
