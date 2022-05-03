/* function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
} */



// noinspection JSUnresolvedFunction
/*let pfp = function(){
    let mogus = httpGet("https://discordid.eu/api?key=did_BGE2SMMVa5M73qTLHB2FIXGuARgMPJI5niwmemGSoZsQeMCcNZyl4iAdlNqz&id=784101881567379456");
    let jsonParsed = JSON.parse(mogus);
    console.log(jsonParsed);
    $("img.avatarimg").attr("src", jsonParsed.avatar);
    $("#usernameh1").text(jsonParsed.usernamewtag);

}
*/



let muted = true
let firsttime = true
let unmute = function () {
switch(muted){
    case true:
        if(firsttime == true){
        muted = false;
        firsttime = false;
        document.getElementById("monkeplayer").muted = false;
        document.getElementById("monkeplayer").play();
        document.getElementById("monkeplayer").volume = 0.1;
        $("img.mute").attr("src", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Bw-unmuted.svg");
        console.log("unmuted and played");
        } else {
            muted = false;
            document.getElementById("monkeplayer").muted = false;
            $("img.mute").attr("src", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Bw-unmuted.svg");
            console.log("unmuted");
        }
        break;
    case false:
        muted = true;
        document.getElementById("monkeplayer").muted = true;
        $("img.mute").attr("src", "mute_icon.svg");
        console.log("muted")
        break;}   
}


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