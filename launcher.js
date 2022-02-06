loadScript("https://bunrum.github.io/RuffleForGoogleSites/ruffle.js");
window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
	player.Config = {
		"backgroundColor": "#000000",
		"contextMenu": true,
	        "autoplay": "auto",
	        "letterbox": "on",
		"unmuteOverlay": "visible",
	};
    player.style.width = "100%"; 
    player.style.height = "100%";
});
