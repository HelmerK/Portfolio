function sent() {
  alert("I look forward to hearing from you!");
}

/*Ensuring my nav links will lead to the correct sections.
Takes the nav bar into account to calculate the correct position */
function scrollToSection(sectionId) {
  var element = document.getElementById(sectionId);
  var headerOffset = 80;
  var elementPosition = element.getBoundingClientRect().top + window.scrollY;
  var offsetPosition = elementPosition - headerOffset;

  console.log(element, headerOffset, elementPosition, offsetPosition);

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function yourHere(){
  alert("You're already here!");
}
