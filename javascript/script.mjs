import {setRegisterFormListener} from "./register.mjs";
import {setLogInFormListener} from "./api/logInListener.mjs";


setRegisterFormListener()

const path = location.pathname;

if(path === '/profile/log-in/index.html') {
    setLogInFormListener()
}


