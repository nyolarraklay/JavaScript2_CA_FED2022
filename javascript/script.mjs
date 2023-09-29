
import * as listeners from "./eventListeners/index.mjs"
import * as template from "./template/index.mjs";
import * as clickElement from "./clickListeners/index.mjs"
import { removePost } from "./Post/remove.mjs";





const path = location.pathname;

if (path === "/profile/log-in/index.html") {
  listeners.setLogInFormListener();
  listeners.setRegisterFormListener();
}

if (path === "/posts/index.html") {
  listeners.setCreatePostListener();
template.renderPostTemplates();
clickElement.clickProfile();
clickElement.clickEditProfile();
clickElement.clickLogOut();
clickElement.clickHome();


}

if (path === "/post/index.html") {
  listeners.setCreatePostListener();
  template.renderPostTemplate();
  clickElement.clickProfile();
clickElement.clickEditProfile();
clickElement.clickLogOut();
clickElement.clickHome();
  }


if (path === "/profile/edit/index.html") {
  listeners.setUpdateProfileListener();
  }

