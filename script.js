var modal = document.getElementsByClassName("modal")[0];

function showModal() {
    var pos = 0;
    var id = setInterval(show, 3);
    function show() {
        if (pos >= 1) {
            clearInterval(id);
        } else {
            pos = pos + 0.1; 
            modal.style.opacity = pos;
        }
    }
    modal.style.display = "grid";
    modal.style.overflowY = "scroll";
    document.documentElement.style.overflow = "hidden";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        setTimeout(function(){
            modal.style.display = "none";
        }, 500);
        document.documentElement.style.overflow = "overlay";
    }
}