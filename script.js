var showcaseImages = document.getElementById("showcaseImages");
var arrowArray = [];
var showcaseCounter = 1;
var searchBar = document.getElementById("searchBar");
var materialSearchIcon = document.getElementById("materialSearchIcon");
var navigationBar = document.getElementById("navigationBar");
var materialMenuIcon = document.getElementById("materialMenuIcon");
var showcase__link = document.getElementsByClassName("showcase__link");
var showcaseCircles = document.getElementsByClassName("showcaseCircles")[0].children;
var circlesCounter = 0;
var footerLists = document.getElementsByClassName("footer__list");
var footerList;

[].forEach.call(
    document.getElementsByClassName("arrowButton"),
    function (element) {
        arrowArray.push(element);
    }
);


function showList(param) {
    footerList = (param.textContent == "Contacts") ? footerLists[0] : footerLists[1];
    if (footerList.style.maxHeight == 0 || footerList.style.maxHeight == "0px") {
        footerList.style.maxHeight = "300px";
    } else {
        footerList.style.maxHeight = "0px";
    }
}

function showSearch() {
    if (searchBar.style.maxHeight == 0 || searchBar.style.maxHeight == "0px") {
        searchBar.style.maxHeight = "100px";
        materialSearchIcon.textContent = "close";
    } else {
        searchBar.style.maxHeight = "0px";
        materialSearchIcon.textContent = "search";
    }

    if (navigationBar.style.maxHeight != 0 || navigationBar.style.maxHeight != "0px") {
        navigationBar.style.maxHeight = "0px";
        materialMenuIcon.textContent = "menu";       
        [].forEach.call(
            document.getElementsByClassName("list"),
            function (element) {
                element.style.maxHeight = 0;
            }
        );
    }
}

function showNav() {
    if (navigationBar.style.maxHeight == 0 || navigationBar.style.maxHeight == "0px") {
        navigationBar.style.maxHeight = "700px";
        materialMenuIcon.textContent = "close";
    } else {
        navigationBar.style.maxHeight = "0px";
        materialMenuIcon.textContent = "menu";       
        [].forEach.call(
            document.getElementsByClassName("list"),
            function (element) {
                element.style.maxHeight = 0;
            }
        );
    }

    if (searchBar.style.maxHeight != 0 || searchBar.style.maxHeight != "0px") {
        searchBar.style.maxHeight = "0px";
        materialSearchIcon.textContent = "search";

    }
}

function openList(param) {
    if (param.nextElementSibling.style.maxHeight == 0 || param.nextElementSibling.style.maxHeight == "0px") {        
        param.nextElementSibling.style.maxHeight = "300px";
    } else {
        param.nextElementSibling.style.maxHeight = 0;
    }
}

function setShowcaseBackground(panel) {
    panel.style.backgroundImage = "url(img/showcase" + 1 + ".jpeg)";
    showcase__link[0].textContent = "Incredddible!";
    setTimeout(function() {showcase__link[0].style.opacity = 1;}, 400);
    showcaseCircles[0].style.background = "#444";

    arrowArray.forEach(function(element) {
        element.onclick = function() {
            panel.style.opacity = 0;
            showcase__link[0].style.opacity = 0;
            setTimeout(function() {
                [].forEach.call(showcaseCircles, function(circle) {
                    circle.style.background = "#eee";
                });
                if (element == arrowArray[0]) {
                    if (showcaseCounter > 1) {
                        panel.style.backgroundImage = "url(img/showcase" + (showcaseCounter - 1) + ".jpeg)";
                        showcase__link[0].textContent = ((showcaseCounter - 1) == 1) ? "Incredddible!" : "Fishes in the RAIN!";
                        setTimeout(function() {showcase__link[0].style.opacity = 1;}, 700);
                        if (showcase__link[0].textContent == "Incredddible!") {
                            showcaseCircles[0].style.background = "#444";
                        } else {
                            showcaseCircles[1].style.background = "#444";
                        }
                        showcaseCounter--;
                        setTimeout(function() {panel.style.opacity = 1;}, 400);
                    } else {
                        showcaseCounter = 3;
                        panel.style.backgroundImage = "url(img/showcase" + showcaseCounter + ".jpeg)";
                        showcase__link[0].textContent = "Clouds in the HEAD!";
                        showcaseCircles[2].style.background = "#444";
                        setTimeout(function() {showcase__link[0].style.opacity = 1;}, 700);
                        setTimeout(function() {panel.style.opacity = 1;}, 400);
                    }
                } else if (element == arrowArray[1]) {
                    if (showcaseCounter < 3) {
                        panel.style.backgroundImage = "url(img/showcase" + (showcaseCounter + 1) + ".jpeg)";
                        showcase__link[0].textContent = ((showcaseCounter + 1) == 2) ? "Fishes in the RAIN!" : "Clouds in the HEAD!";
                        setTimeout(function() {showcase__link[0].style.opacity = 1;}, 700);
                        if (showcase__link[0].textContent == "Fishes in the RAIN!") {
                            showcaseCircles[1].style.background = "#444";
                        } else {
                            showcaseCircles[2].style.background = "#444";
                        }
                        showcaseCounter++;
                        setTimeout(function() {panel.style.opacity = 1;}, 400);
                    } else {
                        showcaseCounter = 1;
                        panel.style.backgroundImage = "url(img/showcase" + showcaseCounter + ".jpeg)";
                        showcase__link[0].textContent = "Incredddible!";
                        showcaseCircles[0].style.background = "#444";
                        setTimeout(function() {showcase__link[0].style.opacity = 1;}, 700);
                        setTimeout(function() {panel.style.opacity = 1;}, 400);
                    }
                }
            }, 400);
        }
    });
}

setShowcaseBackground(showcaseImages);