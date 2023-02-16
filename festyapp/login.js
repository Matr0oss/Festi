const button = document.querySelector('#main__btn');
button.addEventListener('click', function() {
  if (!isLoggedIn) {
    // User is not logged in, redirect to login page
    window.location.href = '/login.html';
  } else {
    // User is logged in, redirect to button page
    window.location.href = '/connect.html';
  }
});