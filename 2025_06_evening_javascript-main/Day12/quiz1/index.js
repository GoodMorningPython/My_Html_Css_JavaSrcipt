const ame_buy = document.querySelector(".ame_buy");
const latte_buy = document.querySelector(".latte_buy");
const banilaLatte_buy = document.querySelector(".banilaLatte_buy");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const ame = document.querySelector(".ame");
const latte = document.querySelector(".latte");
const banilaLatte = document.querySelector(".banilaLatte");

let ame_count = 0;
let latte_count = 0;
let banilaLatte_count = 0;

ame_buy.addEventListener("click", () => {
  ame_count = +ame_count + 1;
  ame.innerHTML = "아메리카노 5000원 " + ame_count + "개";
  total.innerHTML =
    "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 5000) + " 원";
});
latte_buy.addEventListener("click", () => {
  latte_count = +latte_count + 1;
  latte.innerHTML = "라떼 6000원 " + latte_count + "개";
  total.innerHTML =
    "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6000) + " 원";
});
banilaLatte_buy.addEventListener("click", () => {
  banilaLatte_count = +banilaLatte_count + 1;
  banilaLatte.innerHTML = "바닐라 라떼 6500원 " + banilaLatte_count + "개";
  total.innerHTML =
    "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6500) + " 원";
});

reset.addEventListener("click", () => {
  total.innerHTML = "총 0 원";
  ame.innerHTML = "아메리카노 5000원 0개";
  latte.innerHTML = "라떼 6000원 0개";
  banilaLatte.innerHTML = "바닐라 라떼 6500원 0개";
  ame_count = 0;
  latte_count = 0;
  banilaLatte_count = 0;
});
