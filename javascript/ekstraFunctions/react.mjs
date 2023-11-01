import * as post from "../Post/index.mjs";

export async function react(id) {
  const publish = await post.commentPost(id);

  console.log(publish);
}

export async function setCommentListener(comment) {
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
        } catch (error) {}
      });
    }
  });
}
