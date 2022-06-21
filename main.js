// Reveal Elements on Scroll //
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
      /*for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains(reveals[i].id)) {
          links[i].style.color = "blue";
          break;
        }
      }*/
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
