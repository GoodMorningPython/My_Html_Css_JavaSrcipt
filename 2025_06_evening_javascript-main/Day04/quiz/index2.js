const line = +window.prompt("지하철 노선 종류(정수 1~3)") - 1;
const age = +window.prompt("승객의 나이(정수)");
const section = +window.prompt("탑승 구간(정수)");

const subway_wage = [1250, 2000, 3000];
const overcharge = section <= 10 ? 0 : (section - 10) * 100;

if (age <= 7 || 65 <= age) {
  window.console.log(`요금:0원`);
} else if (8 <= age && age <= 18) {
  window.console.log(`요금:${(subway_wage[line] + overcharge) * 0.6}원`);
} else {
  window.console.log(`요금:${(subway_wage[line] + overcharge) * 1}원`);
}
