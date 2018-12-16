function showDescription(item) {

}

var typeButtons = document.getElementsByClassName('type');
var typeDescriptions= document.getElementsByClassName('typeDescription');

[].forEach.call(
    typeButtons,
    function(item) {
      item.addEventListener('click', function(event) {
          [].forEach.call(
              typeDescriptions,
              function(item) {
                  item.style.opacity = 0;
                  setTimeout(function() {item.style.display = 'none';}, 300);
              }
          );
          setTimeout(function() {
            document.getElementsByClassName('section' + item.getAttribute("data-item-type"))[0].style.display = 'block';
            setTimeout(function() {document.getElementsByClassName('section' + item.getAttribute("data-item-type"))[0].style.opacity = 1;}, 100);
          }, 300);
          // console.log(document.getElementsByClassName('section' + item.getAttribute("data-item-type"))[0]);
          setTimeout(function() {document.getElementsByClassName('artHeader')[0].style.display = 'none';}, 300);
          document.getElementsByClassName('artHeader')[0].style.opacity = 0;
      });
    }
);
