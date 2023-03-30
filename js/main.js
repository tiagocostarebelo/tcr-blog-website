//TOGGLE DESKTOP MENU
//get button
const menuBtn = document.querySelector('.hamburger-menu');

//click to toggle desktop menu on/off
menuBtn.addEventListener('click', toggleDesktopMenu);

//BACK TO TOP BTN
//get button
const backTopBtn = document.getElementById('backTop');
//display button when user scrolls 
window.addEventListener('scroll', onScrollDisplay);
//return to top on click
backTopBtn.addEventListener('click', returnToTop);
    



//HELPER FUNCTIONS
function toggleDesktopMenu() { 
  //get menu
  let desktopMenu = document.querySelector('.desktop-menu');
  if (desktopMenu.style.display === "none") {
    desktopMenu.style.display = "flex";
  } else {
    desktopMenu.style.display = "none";
  }
}



function onScrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTopBtn.style.display = "block";
      } else {
        backTopBtn.style.display = "none";
      }
}

function returnToTop() {
    document.body.scrollTop = 0; //Safari browsers
    document.documentElement.scrollTop = 0; 
}