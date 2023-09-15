document.addEventListener("DOMContentLoaded", function () {
    const barButton = document.getElementById("bar");
    const submenu = document.getElementById("submenu");


    if (barButton && submenu) {
        barButton.addEventListener("click", function (event) {
            toggleNav(submenu);
        });

        document.addEventListener("click", function (event) {
            if (!submenu.contains(event.target)) {
                submenu.classList.remove("active"); 
            }
        });
    }
});

function toggleNav(submenu){
    submenu.classList.toggle("active");
}
