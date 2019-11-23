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
var gameInfoBody = document.getElementById('gameInfoBody');
var screenShotDiv = document.getElementById("screenShotsDiv");
var categoryDiv = document.getElementById("category");
var genraDiv = document.getElementById("genra");


nameOfGame.innerHTML = name;
picOfGame.src = gameInfo.header_image;
descriptionOfGame.innerHTML =  gameInfo.short_description;
linkOfGame.href = "https://store.steampowered.com/app/"+id;
linkOfGame.innerHTML = "https://store.steampowered.com/app/"+id;
gameInfoBody.background = gameInfo.background;
var screenShots = gameInfo.screenshots;
var categories = gameInfo.categories;
var genres = gameInfo.genres;

for(var i = 0; i < screenShots.length; i++)
{
  var imgShot = document.createElement("img");
  imgShot.src = screenShots[i].path_thumbnail;
  //imgShot.src = screenShots[i].path_full;

  screenShotDiv.appendChild(imgShot);
}

for(var i = 0; i < categories.length; i++)
{
  var catP = document.createElement("p");
  var test = categories[i].description;
  catP.innerHTML = categories[i].description;

  categoryDiv.appendChild(catP);
}

for(var i = 0; i < genres.length; i++)
{
  var genraP = document.createElement("p");
  genraP.innerHTML = genres[i].description;

  genraDiv.appendChild(genraP);
}


console.log(nameOfGame);

})
