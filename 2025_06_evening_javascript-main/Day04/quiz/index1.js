const bus_type = [
  { name: "시내버스", price: 1200 },
  { name: "광역버스", price: 2000 },
  { name: "마을버스", price: 1000 },
];

const bus = +window.prompt("버스 노선의 종류(정수 1~3)") - 1;
const age = +window.prompt("승객의 나이(정수)");

const isInfantyOrElder = age <= 7 || 65 <= age;
const isYouth = 8 <= age && age <= 19;

if (isInfantyOrElder) {
  window.console.log(`${bus_type[bus].name} 요금: 0원`);
} else if (isYouth) {
  window.console.log(
    `${bus_type[bus].name} 요금: ${bus_type[bus].price * 0.7}원`
  );
} else {
  window.console.log(
    `${bus_type[bus].name} 요금: ${bus_type[bus].price * 1}원`
  );
}
