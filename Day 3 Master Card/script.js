const night = document.querySelector(".toggle") ;
const container = document.querySelector(".container") ;

night.addEventListener("click", () => {
  container.classList.toggle("change") ? (night.firstElementChild.className ="far fa-moon") :
  (night.firstElementChild.className ="far fa-sun") ;
}) ;