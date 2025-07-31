const id = document.querySelector(".id");
const set_ = document.querySelector(".set_");
const len = document.querySelector(".len");

const password = document.querySelector(".password");
const numCheck = document.querySelector(".numCheck");
const strCheck = document.querySelector(".strCheck");
const lenCheck = document.querySelector(".lenCheck");

const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

id.addEventListener("input", (x) => {
  const strlen = x.target.value.length;
  len.style.color = strlen >= 6 && strlen <= 20 ? "green" : "black";
});

password.addEventListener("input", (x) => {
  const strlen = x.target.value.length;
  const hasNumber = num.some((n) => x.target.value.includes(n));
  const hasstr = x.target.value.includes("!" || "@" || "$");
  numCheck.style.color = hasNumber ? "green" : "black";
  strCheck.style.color = hasstr ? "green" : "black";
  lenCheck.style.color = strlen >= 8 && strlen <= 20 ? "green" : "black";
});
