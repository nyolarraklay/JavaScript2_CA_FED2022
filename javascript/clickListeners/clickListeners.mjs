import { remove } from "../storage/index.mjs";

export  function clickHome() {
    const home = document.querySelector("#homeLink");
    home.addEventListener("click", function () {
        document.location.href = "/posts/index.html"
    });
    
}
export  function clickProfile() {
    const myProfile = document.querySelector(".profileLink");
    myProfile.addEventListener("click", function () {
        document.location.href = "/post/index.html"
    });
    
};

export  function clickEditProfile() {
    const editProfile = document.querySelector(".editProfileLink");
    editProfile.addEventListener("click",function () {
        document.location.href = "../profile/edit/index.html"
    });
};

export  function clickLogOut() {
    const logOut = document.querySelector(".logInLink");
   logOut.addEventListener("click", function () {
    document.location.href = "../profile/log-in/index.html";
    remove("profile");

});
};

export  function clickPost() {
    const userPost = document.querySelector(".specificPost");
    userPost.addEventListener("click", function () {
        document.location.href = "posts/UserPost/index.html"
    });
}

