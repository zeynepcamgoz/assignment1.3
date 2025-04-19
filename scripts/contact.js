// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// changing the page content with thank you message on the screen.
// getting submit button elemnts from the page and getting the contact page to replace it. then replacing itwith a thank you message.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

function thankYouMessage() {
  contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message!</p>';
}

// connection between thankYouMessage function and the buttons.
submitButton.addEventListener("click", thankYouMessage);