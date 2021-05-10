function start() {
    var time = new Date();
    var n = time.getHours();
    if (n <= 11)
        document.getElementById("a").innerHTML = "Өглөний мэнд манай сайтад тавтай морилно уу. Танд зориулсан дараах бүтээгдэхүүнийг үзэж танилцана уу.";
    else if (n > 11 && n <= 16)
        document.getElementById("a").innerHTML = "Өдрийн мэнд манай сайтад тавтай морилно уу. Танд зориулсан дараах бүтээгдэхүүнийг үзэж танилцана уу.";
    else if (n > 16 && n <= 23)
        document.getElementById("a").innerHTML = "Оройн мэнд манай сайтад тавтай морилно уу. Танд зориулсан дараах бүтээгдэхүүнийг үзэж танилцана уу.";
    document.querySelector(".navbar-menu").style.display = "none";
}
function callMenu() {
    document.querySelector(".page").style.display = "none";
    document.querySelector(".navbar-menu").style.display = "block";
}
function closeMenu() {
    document.querySelector(".page").style.display = "block";
    document.querySelector(".navbar-menu").style.display = "none";
}
window.addEventListener("load", start, false);