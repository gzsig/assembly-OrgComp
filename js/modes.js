let easyBtn = document.getElementById("easyMode");
let expertBtn = document.getElementById("expertMode");
let register = document.querySelector(".registers");
let learnRegister = document.querySelector(".learn-registers");

function handleUserLevel() {
  console.log(easyBtn);
  console.log(expertBtn);
  console.log(register);
  console.log(learnRegister);

  easyBtn.classList.toggle("hide");
  expertBtn.classList.toggle("hide");
  register.classList.toggle("hide");
  learnRegister.classList.toggle("hide");
}
