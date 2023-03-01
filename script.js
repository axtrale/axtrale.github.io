let announcementPanel = document.querySelector("#openAnnouncement");
let closeAnnouncementButton = document.querySelector("#announcementClose");

function closeAnnounce() {
    announcementPanel.style.display = "none";
}

closeAnnouncementButton.addEventListener("click", closeAnnounce);