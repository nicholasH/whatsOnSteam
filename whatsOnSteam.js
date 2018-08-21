var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.steampowered.com/ISteamApps/GetAppList/v0001/", false);
xhr.send();

var result = xhr.responseText;
var lastItemOnsteam = JSON.parse(result)["applist"]["apps"]["app"].slice(-1)[0];
var name = lastItemOnsteam["name"]
var id = lastItemOnsteam["appid"]


console.log(lastItemOnsteam)
console.log(name)
console.log(id)
nameE = document.getElementsByClassName("item_name").value = "test";
console.log(nameE)
