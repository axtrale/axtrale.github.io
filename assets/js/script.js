let announcementPanel = document.querySelector(".announcement");
let closeAnnouncementButton = document.querySelector(".announcementClose");

function closeAnnounce() {
    announcementPanel.style.display = "none";
}

closeAnnouncementButton.addEventListener("click", closeAnnounce);

let ip = document.querySelector("#ip");
let copyClipboard = document.querySelector(".copyClipboard");

function copyIP() {
    navigator.clipboard.writeText("axtrale.mine.fun").then(() => {
        copyClipboard.classList.remove("none");
        setTimeout(() => {
            copyClipboard.classList.add("none");
          }, "5000");
    }).catch((error) => {
        console.error("L'IP n'a pas pu être copiée…");
    });
}

ip.addEventListener("click", copyIP);