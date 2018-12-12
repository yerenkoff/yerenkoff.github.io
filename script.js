var showcaseImages = document.getElementById("showcaseImages");
var arrowArray = [];
var showcaseCounter = 1;
var showcase__link = document.getElementsByClassName("showcase__link");
var showcaseCircles = document.getElementsByClassName("showcaseCircles")[0].children;
var circlesCounter = 0;
// to stop animation function:
var canceled = false;
var sky = document.getElementById('sky');
var plane = document.getElementById('plane');
var shippingInfo = document.getElementsByClassName('shippingInfo')[0];
var distance = 0;
var initDistance = 0;

function shippingScroll() {
    initDistance = distance;
    distance = ((shippingInfo.offsetWidth - 120) * shippingInfo.scrollTop / (shippingInfo.scrollHeight - shippingInfo.offsetHeight)) + 40;
    if (initDistance > distance) {
        plane.style.transform = "rotate(-90deg)";
        // setTimeout(function(){plane.style.left = distance + 40 + "px";}, 300);
        plane.style.left = distance + "px";
        console.log("back");
    } else {
        plane.style.transform = "rotate(90deg)";
        // setTimeout(function(){plane.style.left = distance + "px";}, 300);
        plane.style.left = distance + "px";
    }
    console.log(distance);
    console.log(initDistance);
}

function openShipping() {
    document.getElementsByClassName("shippingModal")[0].style.height = window.innerHeight * 0.9 + "px";
    document.body.style.overflow = "hidden";
    canceled = false;
    document.getElementsByClassName('footer__shipping')[0].style.display = "grid";
    setTimeout(function() {
        document.getElementsByClassName('footer__shipping')[0].style.opacity = "1";
    }, 0);
}

function closeShipping() {
    document.body.style.overflow = "visible";
    canceled = true;
    document.getElementsByClassName('footer__shipping')[0].style.opacity = "0";
    setTimeout(function() {
        document.getElementsByClassName('footer__shipping')[0].style.display = "none";
    }, 500);
}

[].forEach.call(
    document.getElementsByClassName("arrowButton"),
    function(element) {
        arrowArray.push(element);
    }
);

function setShowcaseBackground(panel) {
    panel.style.backgroundImage = "url(img/showcase" + 1 + ".jpeg)";
    showcase__link[0].textContent = "Incredddible!";
    setTimeout(function() {
        showcase__link[0].style.opacity = 1;
    }, 400);
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
                        setTimeout(function() {
                            showcase__link[0].style.opacity = 1;
                        }, 700);
                        if (showcase__link[0].textContent == "Incredddible!") {
                            showcaseCircles[0].style.background = "#444";
                        } else {
                            showcaseCircles[1].style.background = "#444";
                        }
                        showcaseCounter--;
                        setTimeout(function() {
                            panel.style.opacity = 1;
                        }, 400);
                    } else {
                        showcaseCounter = 3;
                        panel.style.backgroundImage = "url(img/showcase" + showcaseCounter + ".jpeg)";
                        showcase__link[0].textContent = "Clouds in the HEAD!";
                        showcaseCircles[2].style.background = "#444";
                        setTimeout(function() {
                            showcase__link[0].style.opacity = 1;
                        }, 700);
                        setTimeout(function() {
                            panel.style.opacity = 1;
                        }, 400);
                    }
                } else if (element == arrowArray[1]) {
                    if (showcaseCounter < 3) {
                        panel.style.backgroundImage = "url(img/showcase" + (showcaseCounter + 1) + ".jpeg)";
                        showcase__link[0].textContent = ((showcaseCounter + 1) == 2) ? "Fishes in the RAIN!" : "Clouds in the HEAD!";
                        setTimeout(function() {
                            showcase__link[0].style.opacity = 1;
                        }, 700);
                        if (showcase__link[0].textContent == "Fishes in the RAIN!") {
                            showcaseCircles[1].style.background = "#444";
                        } else {
                            showcaseCircles[2].style.background = "#444";
                        }
                        showcaseCounter++;
                        setTimeout(function() {
                            panel.style.opacity = 1;
                        }, 400);
                    } else {
                        showcaseCounter = 1;
                        panel.style.backgroundImage = "url(img/showcase" + showcaseCounter + ".jpeg)";
                        showcase__link[0].textContent = "Incredddible!";
                        showcaseCircles[0].style.background = "#444";
                        setTimeout(function() {
                            showcase__link[0].style.opacity = 1;
                        }, 700);
                        setTimeout(function() {
                            panel.style.opacity = 1;
                        }, 400);
                    }
                }
            }, 400);
        }
    });
}

setShowcaseBackground(showcaseImages);
