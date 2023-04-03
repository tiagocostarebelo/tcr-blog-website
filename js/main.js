//TOGGLE DESKTOP MENU
//get button
const menuBtn = document.querySelector('.hamburger-menu');
//get menu
const desktopMenu = document.querySelector('.desktop-menu');
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
  desktopMenu.classList.toggle('active'); 
  console.log("button clicked");
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