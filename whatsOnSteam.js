var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.steampowered.com/ISteamApps/GetAppList/v0001/", false);
xhr.send();

var result = xhr.responseText;
var lastItemOnsteam = JSON.parse(result)["applist"]["apps"]["app"].slice(-1)[0];
var name = lastItemOnsteam["name"];
var id = lastItemOnsteam["appid"];

link = "https://store.steampowered.com/api/appdetails?appids="+id;
xhr.open("GET", link, false);
xhr.send();

var result = xhr.responseText;
var gameInfo = JSON.parse(result)[id]["data"];

window.addEventListener('load', function () {
var nameOfGame = document.getElementById('item_name');
var picOfGame = document.getElementById('item_pic');
var descriptionOfGame = document.getElementById('item_description');
var linkOfGame = document.getElementById('item_storeLink');

nameOfGame.innerHTML = name;
picOfGame.src = gameInfo.header_image;
descriptionOfGame.innerHTML =  gameInfo.short_description;
linkOfGame.href = "https://store.steampowered.com/app/"+id;
linkOfGame.innerHTML = "https://store.steampowered.com/app/"+id;


PicOfGame.innerHTML = ""
console.log(nameOfGame);

})
