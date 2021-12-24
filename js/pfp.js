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
        let json = JSON.parse(data);
        //set img source of pfp
        document.getElementById("avatarimg").src = json.data.avatar;
    })
}