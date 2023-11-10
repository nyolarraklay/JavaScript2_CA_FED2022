import { removePost } from "../Post/remove.mjs";

export async function deletePostListener(deleteIcon) {
  try {
    deleteIcon.addEventListener("click", (event) => {
      event.preventDefault();
      const icon = event.target;
      const dataSet = icon.dataset;
      const id = dataSet.bsId;

      removePost(id);
    });
  } catch (err) {
    console.log(err.name);
  }
}
