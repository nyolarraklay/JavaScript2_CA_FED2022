import { setRegisterFormListener } from "./register.mjs";
import { setLogInFormListener } from "./api/logInListener.mjs";
import { setCreatePostListener } from "./createPosts.mjs";
import { setUpdatePostListener } from "./updatePost.mjs";
import { setUpdateProfileListener } from "./updateProfile.mjs";
import * as post from "./Post/index.mjs";
import * as template from "./template/index.mjs";
import * as storage from "./storage/index.mjs";

setRegisterFormListener();
setCreatePostListener();

setUpdateProfileListener();

const path = location.pathname;

if (path === "/profile/log-in/index.html") {
  setLogInFormListener();
}

if (path === "/posts/index.html") {
  template.renderPostTemplates();
}

if (path === "/post/index.html") {
    template.renderPostTemplate();
  }
