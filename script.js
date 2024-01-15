const navSlide = () => {
    const navButton = document.querySelector('.nav-menu-button');
    const navList = document.querySelector('.nav-listicons');
    const navLink = document.querySelectorAll('.nav-listicons li');
    navButton.addEventListener('click', () => {
        navList.classList.toggle('nav-listicons-active');
        navLink.forEach((link ,index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLink 0.50s ease forwards ${ index / 7 + 0.0}s`;
            }
        });
        navButton.classList.toggle('toggle');
    });

}
navSlide();


const contentElements = document.querySelectorAll('.content');
  let currentIndex = 0;

  function showNextContent() {
    contentElements[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % contentElements.length;
    contentElements[currentIndex].classList.add('show');
  }

  // Set an interval to change content every 3 seconds (adjust as needed)
  setInterval(showNextContent, 12000);