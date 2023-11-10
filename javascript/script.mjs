import * as listeners from "./eventListeners/index.mjs";
import * as template from "./template/index.mjs";
import * as clickElement from "./clickListeners/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  listeners.setLogInFormListener();
  listeners.setRegisterFormListener();
}

if (path === "/posts/index.html") {
  listeners.setCreatePostListener();
  template.renderPostTemplates(template.postTemplate);
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

if (path === "/posts/UserPost/index.html") {
  template.renderDetailPostTemplate();
  clickElement.clickProfile();
  clickElement.clickEditProfile();
  clickElement.clickLogOut();
  clickElement.clickHome();
}
