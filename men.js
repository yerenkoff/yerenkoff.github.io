var sortList = document.getElementsByClassName("sorting__sortNav")[0];
// var carousel = document.getElementsByClassName("main__carousel")[0];
// var carousel__images = document.getElementsByClassName("carousel__images")[0];
// var scrollNumber = 0;
var recArray = Array.from(document.getElementsByClassName("block__product"));
// var startScroll = 0;
// var endScroll = 0;
// var deltaX = 0;
// var slidesNumber = Array.from(document.getElementsByClassName("carouselImage"));
// var scrollsNumber = [];
// var scrollingWidth = 0;
// var scrollPos = 2;
var container = document.getElementsByClassName('main__carousel')[0];
var carousel = document.getElementsByClassName('carousel__images')[0];
var images = document.getElementsByClassName('carouselImage');
var startNumber = 0;
var touchendNumber = 0;
var scrollNumber = 0;
var scrollArray = [];
var slide = (Array.from(images).length - 1) / 2;
console.log(scrollArray);

window.onload = function() {
    carousel.style.left = scrollArray[slide] + 'px';
}

for (var i = Math.round((window.innerWidth - images[0].offsetWidth) / 2); i >= -(Array.from(images).length - 1) * images[0].offsetWidth; i -= images[0].offsetWidth + 10) {
    scrollArray.push(i);
}

var endNumber = scrollArray[slide];
console.log(endNumber);

carousel.addEventListener('touchstart', function(event) {
    startNumber = Math.round(event.targetTouches[0].clientX);
    console.log(startNumber);
    console.log(endNumber);
});

carousel.addEventListener('touchend', function(event) {
    carousel.style.transition = ".3s";
    setTimeout(function() {
        carousel.style.transition = "0s";
    }, 300);
    touchendNumber = Math.round(event.changedTouches[0].clientX);
    if ((startNumber - touchendNumber) > 70 && slide < 4) {
        slide++;
        carousel.style.left = scrollArray[slide] + 'px';
    } else if ((startNumber - touchendNumber) < -70 && slide > 0) {
        slide--;
        carousel.style.left = scrollArray[slide] + 'px';
    } else {
        carousel.style.left = scrollArray[slide] + 'px';
    }
    setTimeout(function() {
        endNumber = carousel.offsetLeft;
    }, 300);
});

carousel.addEventListener('touchmove', function(event) {
    if (slide <= 4 && slide >= 0) {
        var touch = event.targetTouches[0];
        scrollNumber = touch.pageX - startNumber + endNumber;
        carousel.style.left = scrollNumber + 'px';
    }
}, false);


// slidesNumber.forEach(function(el) {
//     scrollsNumber.push(scrollingWidth);
//     scrollingWidth += 310;
// });

// function carouselScrolling(vec) {
//     var i = 0;
//     var id = setInterval(function frame() {
//         if (i == scrollNumber) {
//             clearInterval(id);
//             console.log("clear");
//             console.log("scrollNumber " + scrollNumber);
//             console.log("scrolleft " + carousel.scrollLeft);
//         } else {
//             i++;
//             if (vec == "left") {
//                 carousel.scrollLeft += 1;
//             } else {
//                 carousel.scrollLeft -= 1;
//             }
//
//         }
//     }, 1);
//
//
// }

// console.log(scrollsNumber);
//
// function carouselScrolling(dir, amount) {
//     var i = 0;
//     var id = setInterval(
//         function() {
//           console.log(amount, "amount");
//           console.log(carousel.scrollLeft, "carsrolll");
//           if (carousel.scrollLeft >= amount) {
//             clearInterval(id);
//           } else {
//               i++;
//               if (dir == "left") {
//                 carousel.scrollLeft += 1;
//               } else {
//                 carousel.scrollLeft -= 1;
//               }
//           }
//         }, 1);
// }
//
// carousel.addEventListener("touchstart", function(event) {
//     startScroll = event.touches[0].clientX;
//     console.log(startScroll);
// }, false);
//
// carousel.addEventListener("touchend", function(event) {
//     endScroll = event.changedTouches[0].clientX;
//     deltaX = endScroll - startScroll;
//
//     if (deltaX < 0) {
//         scrollPos += 1;
//         amount = scrollsNumber[scrollPos];
//         carouselScrolling("left", amount);
//         console.log(1);
//     } else if (deltaX > 0) {
//         scrollPos -= 1;
//         amount = scrollsNumber[scrollPos];
//         carouselScrolling("right", amount);
//         console.log(2);
//     }
//
//     console.log(endScroll);
// }, false);

function sortBy(item) {
    var wrappers = document.getElementsByClassName("main__block");
    var blocksArray = Array.from(document.getElementsByClassName("block__product"));
    console.log(blocksArray[0].children[2].textContent);

    blocksArray.forEach(function(el) {
        el.style.opacity = 0;
    });

    if (item.getAttribute("data-item-type") == "fromLow") {
        blocksArray.sort(
            function(a, b) {
                return a.children[2].textContent.slice(0, -1) - b.children[2].textContent.slice(0, -1);
            }
        );
    } else if (item.getAttribute("data-item-type") == "fromHigh") {
        blocksArray.sort(
            function(a, b) {
                return b.children[2].textContent.slice(0, -1) - a.children[2].textContent.slice(0, -1);
            }
        );
    } else if (item.getAttribute("data-item-type") == "byName") {
        blocksArray.sort(function(a, b) {
            if (a.children[1].textContent < b.children[1].textContent) {
                return -1;
            }

            if (a.children[1].textContent > b.children[1].textContent) {
                return 1;
            }

            return 0;
        });
    } else if (item.getAttribute("data-item-type") == "byRecs") {
        blocksArray = Array.from(recArray);
    }

    [].forEach.call(
        wrappers,
        function(wrapper) {
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
                console.log("removed");
            }
            for (var i = 0; i < 4; i++) {
                wrapper.appendChild(blocksArray[0]);
                blocksArray.shift();
            }
        });
    setTimeout(function() {
        wrappers[0].children[0].style.opacity = 1;
    }, 0);
}

function showSort() {
    if (sortList.style.maxHeight == 0 || sortList.style.maxHeight == "0px") {
        sortList.style.maxHeight = "300px";
    } else {
        sortList.style.maxHeight = "0px";
    }
}

// window.onload = function() {
//     // carousel__images.style.width = (window.innerWidth - 300) + 1540 + "px";
//     carousel__images.style.width = (window.innerWidth - 300) + 1540 + "px";
//     scrollNumber = (carousel.scrollWidth - carousel.offsetWidth) / 2;
//     // carousel.scrollLeft = scrollNumber;
//     carousel.scrollLeft = scrollNumber;
//     // carouselScrolling("left", 0);
// }

// sortBy();

// var myNode = document.getElementById("foo");
// while (myNode.firstChild) {
//     myNode.removeChild(myNode.firstChild);
// }






// function carouselScrolling(vec) {
//     var i = 0;
//     var id = setInterval(function frame() {
//         if (i == scrollNumber) {
//             clearInterval(id);
//             console.log("clear");
//             console.log("scrollNumber " + scrollNumber);
//             console.log("scrolleft " + carousel.scrollLeft);
//         } else {
//             i++;
//             if (vec == "left") {
//                 carousel.scrollLeft += 1;
//             } else {
//                 carousel.scrollLeft -= 1;
//             }
//
//         }
//     }, 1);
//
//
// }

// carousel.addEventListener('touchstart', function(event) {
//     touchNumber = event.changedTouches[0].clientX;
// }, false);
//
// carousel.addEventListener('touchend', function(event) {
//     // event.preventDefault();
//     // console.log(event.changedTouches[0].clientX);
//     if (touchNumber > event.changedTouches[0].clientX) {
//         console.log("go to left!");
//         scrollNumber += 320 - Math.round(touchNumber - event.changedTouches[0].clientX);
//         console.log("start " + touchNumber);
//         console.log("end " + event.changedTouches[0].clientX);
//         console.log("diff " + Math.round(touchNumber - event.changedTouches[0].clientX));
//         console.log("mid " + window.innerWidth / 2);
//         dir = "left";
//         carouselScrolling(dir, touchNumber);
//         // console.log(Math.abs(touchNumber - event.changedTouches[0].clientX));
//     } else {
//         console.log("go to right!");
//         scrollNumber -= 320 - Math.round(event.changedTouches[0].clientX - touchNumber);
//         console.log("end " + event.changedTouches[0].clientX);
//         console.log("mid " + window.innerWidth / 2);
//         dir = "right";
//         carouselScrolling(dir);
//     }
// }, false);
//
// carousel.addEventListener('touchmove', function(event) {
//     console.log(carousel.scrollLeft);
// });


// window.onload = function() {
//     carousel__images.style.width = (window.innerWidth - 300) + 1540 + "px";
//     scrollNumber = (carousel.scrollWidth - carousel.offsetWidth) / 2;
//     carouselScrolling();
// }
//
// function carouselScrolling(dir) {
//     if (!dir) {
//         carousel.scrollLeft = scrollNumber;
//     } else {
//         var i = 0;
//         var id = setInterval(function frame() {
//             if (i == 20) {
//                 clearInterval(id);
//             } else {
//                 i++;
//                 if (dir = "left") {
//                     carousel.scrollLeft -= 1;
//                 } else if (dir = "right") {
//                     carousel.scrollLeft += 1;
//                 }
//             }
//         }, 1);
//     }
//     console.log(carousel.scrollLeft);
// }
//
// carousel.addEventListener('touchstart', function(event) {
//     startNumber = event.changedTouches[0].clientX;
// }, false);
//
// carousel.addEventListener('touchend', function(event) {
//     endNumber = event.changedTouches[0].clientX;
//     var direction;
//     if (startNumber > endNumber) {
//         direction = "left";
//         plusNumber = 310;
//         console.log(direction);
//     } else if (startNumber < endNumber) {
//         direction = "right";
//         plusNumber = 310;
//         console.log(direction);
//     }
//     carouselScrolling(direction);
// }, false);
//
// carousel.addEventListener('touchmove', function(event) {
//     event.preventDefault();
//     scrollNumber += (startNumber - event.changedTouches[0].clientX) / 10;
//     carouselScrolling();
//     console.log(event.changedTouches[0].clientX);
//     // carousel.scrollLeft += event.changedTouches[0].clientX;
// });

// touchstart
//   initial num
//
// touchend
//   if initial num > touchendnum {
//     make scroll num smaller
//   } else {
//     make scrollnum bigger
//   }
