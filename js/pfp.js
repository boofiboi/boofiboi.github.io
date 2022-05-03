function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


// noinspection JSUnresolvedFunction
/*let pfp = function(){
    let mogus = httpGet("https://discordid.eu/api?key=did_BGE2SMMVa5M73qTLHB2FIXGuARgMPJI5niwmemGSoZsQeMCcNZyl4iAdlNqz&id=784101881567379456");
    let jsonParsed = JSON.parse(mogus);
    console.log(jsonParsed);
    $("img.avatarimg").attr("src", jsonParsed.avatar);
    $("#usernameh1").text(jsonParsed.usernamewtag);

}
*/

let showinfo = function () {

    $("div.infodiv").css("opacity", "1");
    $("h1.name").remove();
    $("video.myVideo").css("animation-play-state", "running");
    $("div.infodiv").css("animation-play-state", "running");

}

let monke = function () {
    navigator.clipboard.writeText("boofi#7340");
    alert("Copied discord name w/tag to clipboard")
}