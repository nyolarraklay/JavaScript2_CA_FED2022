import {setRegisterFormListener} from "./register.mjs";
import {setLogInFormListener} from "./api/logInListener.mjs";
import * as post from "./Post/index.mjs";


setRegisterFormListener()

const path = location.pathname;

if(path === '/profile/log-in/index.html') {
    setLogInFormListener()
}


// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost(1548)
// post.getPosts().then (console.log);


