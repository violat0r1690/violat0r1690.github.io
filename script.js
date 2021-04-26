/* Navigation Events */

function showNavigation(){
  let showHamburger = document.getElementById('hamburger')
  showHamburger.style.display = 'none';
  console.log('Hello World!')
}


/* Footer Year */
document.getElementById('year').innerHTML = new Date().getFullYear();
