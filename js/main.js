//GET ELEMENTS
//get header
const header = document.getElementsByTagName('header');
//get hamburger button
const menuBtn = document.querySelector('.hamburger-menu');
//get Back to Top button
const backTopBtn = document.getElementById('backTop');
//get navigation menu
const desktopMenu = document.querySelector('.desktop-menu');


//EVENT LISTENERS
//display back to top button when user scrolls 
window.addEventListener('scroll', onScrollDisplay);
//return to top on click
backTopBtn.addEventListener('click', returnToTop);
//click to toggle desktop menu on/off
menuBtn.addEventListener('click', toggleDesktopMenu);    



//HELPER FUNCTIONS
//Function Toggle Full Navigation Menu when on mobile
function toggleDesktopMenu() { 
  desktopMenu.classList.toggle('active');
}

//Function display back to top button
function onScrollDisplay() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backTopBtn.style.display = "block";
    } else {
      backTopBtn.style.display = "none";
    }
}

//Function Return to Top button
function returnToTop() {
    document.body.scrollTop = 0; //Safari browsers
    document.documentElement.scrollTop = 0; 
}

//Function onload to read Header height and apply it to the mobile navigation menu
