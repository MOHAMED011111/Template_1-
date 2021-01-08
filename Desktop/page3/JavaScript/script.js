var timeDisplay = document.getElementById("time");

function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", { timeZone: "Egypt" });
    var formattedString = dateString.replace(", ", "  ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 0);