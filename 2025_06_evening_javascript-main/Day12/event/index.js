// const btn = document.querySelector(".hi");

// btn.addEventListener("click", (x) => {
//   console.log(x.target.innerHTML);
// });

const input = document.querySelector("input");
const total = document.querySelector(".total");
const emoji = document.querySelector(".emoji");

input.addEventListener("input", (x) => {
  total.innerHTML = "문자열 수: " + x.target.value.length + "/10";
  total.style.color = x.target.value.length > 10 ? "red" : "black";
});

emoji.addEventListener("click", (x) => {
  x.target.innerHTML = x.target.innerHTML == "😎" ? "😋" : "😎";
  input.type = input.type == "text" ? "password" : "text";
});
