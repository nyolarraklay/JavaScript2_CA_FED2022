export async function redirectToDetails(img) {
 
    img.addEventListener("click", (event) => {
      event.preventDefault();
      const icon = event.target;
      const dataSet = icon.dataset;
      const id = dataSet.bsId;
      
      location.href = `/posts/UserPost/index.html?id=${id}`
    
    }, )}