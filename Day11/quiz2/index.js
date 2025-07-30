const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

const numNum = (num) => {
  if (num.innerHTML <= 0) {
    return (num.innerHTML = 0);
  } else {
    num.style.color = num.innerHTML < 10 ? "black" : "blue";
  }
};
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
  numNum(num);
});
minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
  numNum(num);
});
