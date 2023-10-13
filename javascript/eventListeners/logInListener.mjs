import { logIn } from "../api/loginUser.mjs";



export function setLogInFormListener() {
    const form = document.querySelector('#loginForm');

    
    if(form) {
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const logInUser = event.target;
        
            const logInData = new FormData(logInUser);
            const profile = Object.fromEntries(logInData.entries())
            
        
            logIn(profile)
        })
    } 

}


