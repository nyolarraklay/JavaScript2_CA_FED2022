import { registerToAPI } from "../api/authentication.mjs";

export function setRegisterFormListener() {
    const form = document.querySelector('#signUpForm');

    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const signUp = event.target;
        
            const signUpData = new FormData(signUp);
            const profile = Object.fromEntries(signUpData.entries())
            
        
            registerToAPI(profile)
        })
    }

}



