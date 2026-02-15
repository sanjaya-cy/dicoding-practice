/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// create variable each view's elements
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// create variable to save email and password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// add click action to the button
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // get value from each input (email and password) when button clicked
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    // check if email and paasword are equal with database
    if (email == expectedEmail && password == expectedPassword){
      // go to home page
      goToHome();
    } else {
      //error pop up wrong input
      showPopup;
    }
});
