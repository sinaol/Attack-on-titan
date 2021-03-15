/*sidebar*/
var sidebar = document.getElementById("sidebar");
var sidebarBtn = document.getElementById("sidebar-btn");

function comeIn() {
    sidebar.style.animation = "comeIn 0.5s";
    sidebar.style.left = "0px";
    sidebarBtn.removeEventListener("click", comeIn);
    sidebarBtn.addEventListener("click", goOut);
}

function goOut() {
    sidebar.style.animation = "goOut 0.5s";
    sidebar.style.left = "-220px";
    sidebarBtn.removeEventListener("click", goOut);
    sidebarBtn.addEventListener("click", comeIn);
}
/*header background image */

var bgImage = document.getElementById("backgroundImage");
var images = ["https://wallpapercave.com/wp/wp1837539.jpg", "https://wallpapercave.com/wp/wp1837557.jpg", "https://wallpapercave.com/wp/wp1837580.png", "https://wallpapercave.com/wp/wp1837583.jpg", "https://wallpapercave.com/wp/wp1837545.jpg"];
var n = 0;

window.onload = function() {
    function changeBGI() {
        bgImage.style.backgroundImage = "url(" + images[n] + ")";
        n > 3 ? n = 0 : n++;
    }
    setInterval(changeBGI, 3000);
}