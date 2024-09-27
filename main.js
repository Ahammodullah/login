let input = document.getElementById("input");
let eye = document.querySelector(".input_control span");

let toggleEye = eye.querySelector("i");

const click = document.querySelector(".click");
const box = document.querySelector(".box");

click.addEventListener("click",()=> {
   box.style.background="rgb(227, 24, 24)"

})

eye.addEventListener("click", inputValue);

function inputValue() {
  let isEyeClose = toggleEye.getAttribute("class") == "fa-solid fa-eye-slash";
  if (isEyeClose) {
    input.setAttribute("type", "text");
    toggleEye.setAttribute("class", "fa-solid fa-eye");
  } else {
    input.setAttribute("type", "password");
    toggleEye.setAttribute("class", "fa-solid fa-eye-slash");
  }
}
