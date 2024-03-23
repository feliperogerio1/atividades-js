var container = document.getElementById("container");
var countMen = 0;
var countWomen = 0;
var countTotal = 0;

window.onload = function() {
    loadPage();
}

function reset() {
    countMen = 0;
    countWomen = 0;
    countTotal = 0;
    loadPage();
}

function addMan() {
    countMen++;
    countTotal++;
    loadPage();
}

function removeMan() {
    if (countMen == 0) {
        return;
    }
    countMen--;
    countTotal--;
    loadPage();
}

function addWoman() {
    countWomen++;
    countTotal++;
    loadPage();
}

function removeWoman() {
    if (countWomen == 0) {
        return;
    }
    countWomen--;
    countTotal--;
    loadPage();
}

function loadPage() {
    container.innerHTML = "";

    var mainContainer = document.createElement("div");
    
    var containerTotal = document.createElement("div");

    var buttonReset = document.createElement("img");
    buttonReset.src = "https://cdn-icons-png.freepik.com/512/2618/2618245.png";
    buttonReset.setAttribute("onclick", "reset()");
    var title = document.createElement("h1");
    var contentTitle = document.createTextNode("Total");
    title.appendChild(contentTitle);
    var counterTotalArea = document.createElement("div");
    var contentCounterTotalArea = document.createTextNode(countTotal);
    counterTotalArea.append(contentCounterTotalArea);
    var firstContainer = document.createElement("div");
    containerTotal.appendChild(title);
    containerTotal.appendChild(counterTotalArea);
    firstContainer.appendChild(containerTotal);
    firstContainer.appendChild(buttonReset);

    var imageMan = document.createElement("img");
    imageMan.src = "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png";
    var buttonAddMan = document.createElement("img");
    buttonAddMan.src = "https://static.vecteezy.com/system/resources/previews/000/582/976/original/button-plus-icon-vector.jpg";
    buttonAddMan.setAttribute("onclick", "addMan()");
    var buttonRemoveMan = document.createElement("img");
    buttonRemoveMan.src = "https://static.thenounproject.com/png/261368-200.png";
    buttonRemoveMan.setAttribute("onclick", "removeMan()");
    var containerButtonMan = document.createElement("div");
    containerButtonMan.appendChild(buttonAddMan);
    containerButtonMan.appendChild(buttonRemoveMan);
    var titleTotalMen = document.createElement("h2");
    var contentTitleTotalMen = document.createTextNode("Homens");
    titleTotalMen.appendChild(contentTitleTotalMen);
    var counterTotalMenArea = document.createElement("div");
    var contentCounterTotalMenArea = document.createTextNode(countMen);
    counterTotalMenArea.appendChild(contentCounterTotalMenArea);
    var containerMan = document.createElement("div");

    var imageWoman = document.createElement("img");
    imageWoman.src = "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png";
    var buttonAddWoman = document.createElement("img");
    buttonAddWoman.src = "https://static.vecteezy.com/system/resources/previews/000/582/976/original/button-plus-icon-vector.jpg";
    buttonAddWoman.setAttribute("onclick", "addWoman()");
    var buttonRemoveWoman = document.createElement("img");
    buttonRemoveWoman.src = "https://static.thenounproject.com/png/261368-200.png";
    buttonRemoveWoman.setAttribute("onclick", "removeWoman()");
    var containerButtonWoman = document.createElement("div");
    containerButtonWoman.appendChild(buttonAddWoman);
    containerButtonWoman.appendChild(buttonRemoveWoman);
    var titleTotalWomen = document.createElement("h2");
    var contentTitleTotalWomen = document.createTextNode("Mulheres");
    titleTotalWomen.appendChild(contentTitleTotalWomen);
    var counterTotalWomenArea = document.createElement("div");
    var contentCounterTotalWomenArea = document.createTextNode(countWomen);
    counterTotalWomenArea.appendChild(contentCounterTotalWomenArea);
    var containerWoman = document.createElement("div");

    var secondContainer = document.createElement("div");

    container.setAttribute("style", "width: 100%; display: flex; justify-content: center;");
    mainContainer.setAttribute("style", "width: 70%; display: flex; flex-direction: column; align-items: center;");
    firstContainer.setAttribute("style", "width: 100%; display: flex; justify-content: space-between;");
    containerTotal.setAttribute("style", "margin: auto; padding-left: 90px; display: flex; flex-direction: column; align-items: center;");
    counterTotalArea.setAttribute("style", "padding: 10px 40px; border: solid; border-radius: 10px; font-size: 25px;");
    secondContainer.setAttribute("style", "width: 100%; display: flex; justify-content: space-evenly;");
    containerMan.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    containerWoman.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    containerButtonMan.setAttribute("style", "padding: 10px; display: flex; align-items: center;");
    containerButtonWoman.setAttribute("style", "padding: 10px; display: flex; align-items: center;");
    buttonReset.setAttribute("style", "margin-right: 30px; width: 60px; height: 60px;");
    imageMan.setAttribute("style", "width: 200px; height: 200px;");
    imageWoman.setAttribute("style", "width: 200px; height: 200px;");
    buttonAddMan.setAttribute("style", "width: 50px; height: 50px;");
    buttonRemoveMan.setAttribute("style", "width: 35px; height: 35px;");
    buttonAddWoman.setAttribute("style", "width: 50px; height: 50px;");
    buttonRemoveWoman.setAttribute("style", "width: 35px; height: 35px;");
    counterTotalMenArea.setAttribute("style", "padding: 10px 40px; border: solid; border-radius: 10px; font-size: 25px;");
    counterTotalWomenArea.setAttribute("style", "padding: 10px 40px; border: solid; border-radius: 10px; font-size: 25px;");

    containerMan.appendChild(imageMan);
    containerMan.appendChild(containerButtonMan);
    containerMan.appendChild(titleTotalMen);
    containerMan.appendChild(counterTotalMenArea);

    containerWoman.appendChild(imageWoman);
    containerWoman.appendChild(containerButtonWoman);
    containerWoman.appendChild(titleTotalWomen);
    containerWoman.appendChild(counterTotalWomenArea);

    secondContainer.appendChild(containerMan);
    secondContainer.appendChild(containerWoman);

    mainContainer.appendChild(firstContainer);
    mainContainer.appendChild(secondContainer);

    container.appendChild(mainContainer);
}