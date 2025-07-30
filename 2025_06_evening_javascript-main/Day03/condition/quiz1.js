// const angle = +window.prompt("각도 입력");
// if (0 < angle && angle < 90) {
//   window.console.log("예각");
// } else if (angle == 90) {
//   window.console.log("직각");
// } else if (90 < angle && angle < 180) {
//   window.console.log("평각");
// } else if (angle == 180) {
//   window.console.log("둔각");
// } else {
// }

// const kor_score = +window.prompt("국어 점수 입력");
// const math_score = +window.prompt("수학 점수 입력");
// const eng_score = +window.prompt("영어 점수 입력");
// const avg = (kor_score + math_score + eng_score) / 3;

// const has_100_oneofthem =
//   kor_score == 100 || math_score == 100 || eng_score == 100;
// const has_under_60_oneofthem =
//   kor_score <= 60 || math_score <= 60 || eng_score <= 60;

// if (avg >= 90) {
//   window.console.log("A등급");
// } else if (avg >= 80) {
//   window.console.log("B등급");
// } else {
//   window.console.log("C등급");
// }

// if (has_100_oneofthem) {
//   window.console.log("Good!");
// }
// if (has_under_60_oneofthem) {
//   window.console.log("Bad!");
// }

const drink = +window.prompt("음료의 종류(1~3)");
const amount = +window.prompt("구매할 음료 개수");
const money = +window.prompt("투입 금액");

if (drink == 1) {
  //아메리카노 3000
  const americano_price = 3000 * amount;
  if (money > americano_price) {
    window.console.log(
      `아메리카노 ${amount}개, 잔돈 ${money - americano_price}원`
    );
  } else {
    window.console.log("잔액이 부족합니다.");
  }
} else if (drink == 2) {
  const lemon_price = 4000 * amount;
  if (money > lemon_price) {
    window.console.log(`레몬에이드 ${amount}개, 잔돈 ${money - lemon_price}원`);
  } else {
    window.console.log("잔액이 부족합니다.");
  }
} else if (drink == 3) {
  const latte_price = 3500 * amount;
  if (money > latte_price) {
    window.console.log(`카페라떼 ${amount}개, 잔돈 ${money - latte_price}원`);
  } else {
    window.console.log("잔액이 부족합니다.");
  }
} else {
  //에러케이스
}
