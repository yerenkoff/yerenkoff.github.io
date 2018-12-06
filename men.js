var sortList = document.getElementsByClassName("sorting__sortNav")[0];
var carousel = document.getElementsByClassName("main__carousel")[0];
var carousel__images = document.getElementsByClassName("carousel__images")[0];
var scrollNumber = 0;
var startNumber;
var endNumber;
var plusNumber;

function showSort() {
    if (sortList.style.maxHeight == 0 || sortList.style.maxHeight == "0px") {
        sortList.style.maxHeight = "300px";
    } else {
        sortList.style.maxHeight = "0px";
    }
    console.log(carousel.scrollLeft);
    console.log(scrollNumber);
}

window.onload = function() {
    // carousel__images.style.width = (window.innerWidth - 300) + 1540 + "px";
    carousel__images.style.width = (window.innerWidth - 300) + 1540 + "px";
    scrollNumber = (carousel.scrollWidth - carousel.offsetWidth) / 2;
    carousel.scrollLeft = scrollNumber;
    // carouselScrolling("left", 0);
}

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
