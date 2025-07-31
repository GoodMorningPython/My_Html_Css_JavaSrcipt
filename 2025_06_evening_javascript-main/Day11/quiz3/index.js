const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const total = document.querySelector(".total");

const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");
const total2 = document.querySelector(".total2");

const totals = document.querySelector(".totalPrice");
const price = 15900;
const totalClick = 0;
let click = 2;

const clickNum = (click) => {
  return click * price + "원";
};

const numNum = (num) => {
  if (num.innerHTML < 1) {
    return (num.innerHTML = 1), (click = 3);
  } else {
    num.style.color = num.innerHTML < 10 ? "black" : "blue";
  }
};
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
  numNum(num);
  total.innerHTML = "";
  total.innerHTML = +num.innerHTML * price + "원";
  click = click + 1;
  totals.innerHTML = clickNum(click);
});
minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
  numNum(num);
  total.innerHTML = "";
  total.innerHTML = +num.innerHTML * price + "원";
  click = click - 1;
  totals.innerHTML = clickNum(click);
});

plus2.addEventListener("click", () => {
  num2.innerHTML = +num2.innerHTML + 1;
  numNum(num2);
  total2.innerHTML = "";
  total2.innerHTML = +num2.innerHTML * price + "원";
  click = click + 1;
  totals.innerHTML = clickNum(click);
});
minus2.addEventListener("click", () => {
  num2.innerHTML = +num2.innerHTML - 1;
  numNum(num2);
  total2.innerHTML = "";
  total2.innerHTML = +num2.innerHTML * price + "원";
  click = click - 1;
  totals.innerHTML = clickNum(click);
});
