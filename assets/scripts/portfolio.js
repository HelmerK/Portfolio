// Dealing with the sending the contact form out to my email
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch(this.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    });
});

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
  alert("You're already here silly!");
}
