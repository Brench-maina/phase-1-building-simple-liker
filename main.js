// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Get all heart elements
const hearts = document.querySelectorAll('.like-glyph');

const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
//Add click event
hearts.forEach(heart =>{
 heart.addEventListener('click', () => {
// make server call
  mimicServerCall()
  .then(() => {
    // Toggle heart state
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    } else{
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch(error => {
    // Show error message in modal
    // and hide it after 3 seconds
    modal.classList.remove('hidden');
    modalMessage.textContent = error;
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });
 });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
