var searchBar = document.getElementById("searchBar");
var materialSearchIcon = document.getElementById("materialSearchIcon");
var navigationBar = document.getElementById("navigationBar");
var materialMenuIcon = document.getElementById("materialMenuIcon");
var footerLists = document.getElementsByClassName("footer__list");
var footerList;
var upButton = document.getElementsByClassName("upButton")[0];
var upButtonFadeIn;
var upButtonFadeOut;


function goUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

var fadeIn = function() {
    var elements = document.getElementsByClassName("hidden");
    var header = document.getElementsByClassName("header")[0];
    var windowHeight = window.innerHeight;
    elements[0].style.opacity = 1;
    elements[1].style.opacity = 1;
    window.onscroll = function() {
        console.log(1);
        checkPosition();
        checkHeaderPos();
        clearTimeout(upButtonFadeIn);
        clearTimeout(upButtonFadeOut);
        if (header.style.maxHeight == "50px") {
            upButton.style.display = "grid";
            upButtonFadeIn = setTimeout(function() {
                upButton.style.opacity = 1;
            }, 100);
        }

        if (header.style.maxHeight == "100px") {
            upButton.style.opacity = 0;
            upButtonFadeOut = setTimeout(function() {
                upButton.style.display = "none";
            }, 100);
        }

    }

    function checkHeaderPos() {
        if (window.pageYOffset > 300) {
            header.style.maxHeight = "50px";
            navigationBar.style.top = "49px";
            searchBar.style.top = "49px";
            [].forEach.call(
                header.getElementsByTagName("button"),
                function(element) {
                    element.style.marginTop = 0;
                }
            );
        } else {
            header.style.maxHeight = "100px";
            navigationBar.style.top = "100px";
            searchBar.style.top = "100px";
            [].forEach.call(
                header.getElementsByTagName("button"),
                function(element) {
                    element.style.marginTop = "25px";
                }
            );
        }
    }

    function checkPosition() {
        for (var j = 0; j < elements.length; j++) {
            var positionFromTop = elements[j].getBoundingClientRect().top;
            if (windowHeight - positionFromTop > 50) {
                elements[j].style.opacity = 1;
            }
        }
    }
}

function showList(param) {
    footerList = (param.textContent == "Contacts") ? footerLists[0] : footerLists[1];
    if (footerList.style.maxHeight == 0 || footerList.style.maxHeight == "0px") {
        footerList.style.maxHeight = "500px";
    } else {
        footerList.style.maxHeight = "0px";
    }
}

function showSearch() {
    document.body.style.overflow = "visible";
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
            function(element) {
                element.style.maxHeight = 0;
            }
        );
    }
}

function showNav() {
    if (navigationBar.style.maxHeight == 0 || navigationBar.style.maxHeight == "0px") {
        navigationBar.style.maxHeight = window.innerHeight - 100 + "px";
        navigationBar.style.height = window.innerHeight + "px";
        materialMenuIcon.textContent = "close";
        document.body.style.overflow = "hidden";
    } else {
        navigationBar.style.maxHeight = "0px";
        materialMenuIcon.textContent = "menu";
        document.body.style.overflow = "visible";
        [].forEach.call(
            document.getElementsByClassName("list"),
            function(element) {
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
        // if (navigationBar.offsetHeight >= (window.innerHeight * 0.7)) {
        //     document.body.style.overflow = "hidden";
        // }
    } else {
        param.nextElementSibling.style.maxHeight = 0;
        // if (navigationBar.offsetHeight <= (window.innerHeight * 0.7)) {
        //     document.body.style.overflow = "visible";
        // }
    }
}

fadeIn();
