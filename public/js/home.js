
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navbar = document.getElementById("navbar");
    const overlay = document.getElementById('overlay');
    menuIcon.addEventListener("click", function () {
        toggleNav()
    });

    overlay.addEventListener("click", function () {
        toggleNav()
    });

    
});

document.addEventListener("keydown", function(event) {
    navbar.classList.add("hidden");
    overlay.classList.add("hidden");
});

function toggleNav(){
    navbar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}