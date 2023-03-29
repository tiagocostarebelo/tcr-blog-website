//BACK TO TOP BTN
//get button
const backTopBtn = document.getElementById('backTop');
//display button when user scrolls 

window.addEventListener('scroll', onScrollDisplay);
backTopBtn.addEventListener('click', returnToTop);
    


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