const num = +window.prompt("음료의 종류 선택");
const amount = +window.prompt("구매할 음료 개수");
const money = +window.prompt("투입한 금액");

if (num == 1) {
  //아메리카노 3000
  const total_cost = 3000 * amount;
  if (money >= total_cost) {
    window.console.log(`아메리카노 ${amount}개,잔돈 ${money - total_cost}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else if (num == 2) {
  const total_cost1 = 4000 * amount;
  if (money >= total_cost1) {
    window.console.log(`레몬에이드 ${amount}개,잔돈 ${money - total_cost1}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else if (num == 3) {
  const total_cost2 = 3500 * amount;
  if (money >= total_cost) {
    window.console.log(`카페라떼 ${amount}개,잔돈 ${money - total_cost2}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else {
  window.console.log("에러임");
}
