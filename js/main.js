function openMenu() {
	var navMain = document.getElementById("navMenuId");
	if (navMain.className === "navMenu") {
		navMain.className += " mobileView";
	} else {
		navMain.className = "navMenu";
	}
}
var index = 1;
var changeImage = function changeImage() {
	var imgs = ["./img/banner.webp", "./img/banner-1.webp", "./img/banner-2.webp"];
	document.getElementById('img').src = imgs[index];
	index++;
	if (index == 3) index = 0;
}
setInterval(changeImage, 2000);