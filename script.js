let header = document.querySelector("header");
window.onscroll = () => {
    if (window.scrollY > 100){
        header.classList.add("scrollBackground");
        console.log("greaye")
    }else{
        header.classList.remove("scrollBackground");
    }
}


let menuBar = document.querySelector(".menuBar");
let nav = document.querySelector("header nav");
let Cancel = document.querySelector(".cancel");
menuBar.onclick = () => {
    nav.classList.add("showMenu");
    menuBar.classList.add("hideMenu")
    Cancel.style.display = "block"
}


Cancel.onclick = () => {
    nav.classList.remove("showMenu");
    menuBar.classList.remove("hideMenu")
    Cancel.style.display = "none"
}