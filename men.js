var sortList = document.getElementsByClassName("sorting__sortNav")[0];
var recArray = Array.from(document.getElementsByClassName("block__product"));
var container = document.getElementsByClassName('main__carousel')[0];
var carousel = document.getElementsByClassName('carousel__images')[0];
var images = document.getElementsByClassName('carouselImage');
var startNumber = 0;
var touchendNumber = 0;
var touchendNumberY = 0;
var scrollNumber = 0;
var startNumberY = 0;
var scrollArray = [];
var slide = (Array.from(images).length - 1) / 2;
console.log(scrollArray);
var executed = false;
var allow = false;

window.onload = function() {
    carousel.style.left = scrollArray[slide] + 'px';
}

for (var i = Math.round((window.innerWidth - images[0].offsetWidth) / 2); i >= -(Array.from(images).length - 1) * images[0].offsetWidth; i -= images[0].offsetWidth + 10) {
    scrollArray.push(i);
}

var endNumber = scrollArray[slide];
console.log(endNumber);

carousel.addEventListener('touchstart', function(event) {
    executed = false;
    startNumber = Math.round(event.targetTouches[0].clientX);
    startNumberY = Math.round(event.targetTouches[0].clientY);
    console.log(startNumber);
    console.log(endNumber);
});

carousel.addEventListener('touchend', function(event) {
    document.body.style.overflow = "visible";
    carousel.style.transition = ".3s";
    setTimeout(function() {
        carousel.style.transition = "0s";
    }, 300);
    touchendNumber = Math.round(event.changedTouches[0].clientX);
    touchendNumberY = Math.round(event.changedTouches[0].clientY);
    if ((startNumber - touchendNumber) > 70 && slide < 4 && allow) {
        slide++;
        carousel.style.left = scrollArray[slide] + 'px';
    } else if ((startNumber - touchendNumber) < -70 && slide > 0 && allow) {
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
    console.log(Math.abs(startNumberY - event.targetTouches[0].clientY));
    var touchmoveY = event.targetTouches[0].clientY;
    moveSlides(touchmoveY);
    if (allow) {
        document.body.style.overflow = "hidden";
        var touch = event.targetTouches[0];
        // console.log(Math.abs(startNumberY - event.targetTouches[0].pageY));
        scrollNumber = touch.pageX - startNumber + endNumber;
        carousel.style.left = scrollNumber + 'px';
    }
}, false);

function moveSlides(touchmoveY) {
    if (!executed) {
        executed = true;
        if (Math.abs(startNumberY - touchmoveY) < 10) {
            allow = true;
        } else {
            allow = false;
        }
    }
}

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
