/* Navigation Events */

function showNavigation(){
  let showHamburger = document.getElementById('hamburger')
  showHamburger.style.display = 'none';
  console.log('Hello World!')
}

/*Carusel Scipts*/


$(document).ready(function(){
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


/* Footer Year */
document.getElementById('year').innerHTML = new Date().getFullYear();
