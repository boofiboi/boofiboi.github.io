// GET a page
let getPage = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };
    xhr.send(null);
};

let pfp = function () {
    getPage("https://discordid.eu/api?key=did_BGE2SMMVa5M73qTLHB2FIXGuARgMPJI5niwmemGSoZsQeMCcNZyl4iAdlNqz&id=784101881567379456", function (data) {
        let datajson = JSON.parse(data);
        //set img source of pfp
        console.log("Ignore the error above <33, its expected behaviour");

        //set the src attribute of avatarimg to the url of the pfp
        $("img.avatarimg").attr("src", datajson.avatar + "?size=1024");
        console.log("pfp set");
        document.getElementById("usernameh1").innerHTML = datajson.usernamewtag;

    })
}

let CopyUsername = function () {
    let copyText = document.getElementById("usernameh1").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied username to clipboard!");
}
let openPfp = function () {
    window.open($("img.avatarimg").attr("src"), "_blank");
}