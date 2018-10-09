var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.steampowered.com/ISteamApps/GetAppList/v0001/", false);
xhr.send();

var result = xhr.responseText;
var lastItemOnsteam = JSON.parse(result)["applist"]["apps"]["app"].slice(-1)[0];
var name = lastItemOnsteam["name"];
var id = lastItemOnsteam["appid"];
window.addEventListener('load', function () {
var nameOfGame = document.getElementsByClassName('item_name')[0];
var PicOfGame = document.getElementsByClassName('item_pic')[0];

nameOfGame.innerHTML = name

PicOfGame.innerHTML = ""
console.log(nameOfGame);

})

window.location.replace("https://store.steampowered.com/app/"+id);
