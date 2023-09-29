import { getProfile, updateProfile } from "../profile/index.mjs"
import * as storage from "../storage/index.mjs"

import { load } from "../storage/index.mjs"
import { redirectToHome } from "../template/post.mjs";

export async function setUpdateProfileListener() {
    const form = document.querySelector('#editProfile');
      
    if (form) {
        const {name, email} = load("profile");
        form.name.value = name;
        form.email.value = email;

        const button= form.querySelector(".profileButton");
        button.disabled = true;

        const profile = await getProfile(name);

        
        form.banner.value = profile.banner;
        form.avatar.value = profile.avatar;

        button.disabled = false;
        

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            profile.name = name;
            profile.email = email;
           
            updateProfile(profile);
           
            wait(500)
            storage.remove ("profil");
          wait(500)
            storage.save("profile", profile);
            wait(500)
            redirectToHome()
            
        })
    }

}

// await wait(500)
// remove ("profil");
// await wait(500)

// save("profile", profile);

function wait(time) {
    return new Promise (function (res) {
      setTimeout(res, time)
    })
  };

 

