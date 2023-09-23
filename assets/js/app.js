let header = document.querySelector("header")
let toggle = document.querySelector(".burger")
let closeSidebar = document.querySelector(".close")
let navbar = document.querySelector("nav ul")

window.onscroll = function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    }
    else {
        header.style.backgroundColor = ""
    }
}

toggle.onclick = () => {
    navbar.classList.toggle("show")
}

// closeSidebar.onclick = function () {
//     if(navbar.style.right == "0") {
//         navbar.style.right = "-30%"
//     } else {
//         navbar.style.right = "-30%"
//     }
// }