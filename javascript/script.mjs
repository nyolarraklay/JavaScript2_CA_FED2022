import {setRegisterFormListener} from "./register.mjs";
import {setLogInFormListener} from "./api/logInListener.mjs";
import {setCreatePostListener} from "./createPosts.mjs";
import {setUpdatePostListener} from "./updatePost.mjs";
import {setUpdateProfileListener} from "./updateProfile.mjs";
import * as post from "./Post/index.mjs";
import * as template from "./template/index.mjs";
import * as storage from "./storage/index.mjs";


setRegisterFormListener();
setCreatePostListener();
setUpdatePostListener();
setUpdateProfileListener()

const path = location.pathname;

if(path === '/profile/log-in/index.html') {
    setLogInFormListener()
}


// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost(1548)
// post.getPosts().then (console.log);


// test template

async function testTemplate (){
    const publish = await post.getPosts();
    const container = document.querySelector(".API-title");
    
    template.renderPostTemplates(publish, container)
   
}

testTemplate()

