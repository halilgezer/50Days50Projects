const container = document.querySelector(".container");
const btn = document.querySelector("#btn-left");

btn.addEventListener("click",()=>{
  container.classList.toggle("change");
})
