//логика появления информационного банера об использовании куки

function baner(){
        setTimeout( () => {
        const cookiContainer = document.querySelector(".cookie-container");
        const cookieButton = document.querySelector(".cookie-btn");

        cookieButton.addEventListener("click" , () => {
            cookiContainer.classList.remove("active");
            localStorage.setItem("cookieBannerDisplayed", "true")
            console.log('not active');
        });
        if(!localStorage.getItem("cookieBannerDisplayed")){
            cookiContainer.classList.add("active");
            console.log('active');
        }
    }, 3000);
}

export default baner()