const coffee = "ice americano";

window.console.log("글자 포함 여부: " + coffee.includes("ice")); // 글자 포함 여부 boolean
window.console.log("글자 n번 반복: " + coffee.repeat(3)); // 글자 n번 반복 string
window.console.log("글자 0번부터 4까지 돌려줌: " + coffee.slice(0, 5)); // 글자 0번부터 4까지 돌려줌 //
window.console.log("글자 i를 k로 바꾸고 돌려줌: " + coffee.replace("i", "k")); // 글자 i를 k로 바꾸고 돌려줌 //
window.console.log(
  "글자 i를 모두 k로 바꾸고 돌려줌: " + coffee.replaceAll("i", "k")
); // 글자 i를 모두 k로 바꾸고 돌려줌 //
window.console.log("글자 e로 시작하는지 물음: " + coffee.startsWith("e")); // 글자 e로 시작하는지 물음 boolean
window.console.log("대문자화: " + coffee.toUpperCase()); // 대문자화 string
window.console.log("소문자화: " + coffee.toLowerCase()); // 소문자화 //
window.console.log(
  "a를 기준으로 슬라이싱하여 리스트로 돌려줌: " + coffee.split("a")
); // a를 기준으로 슬라이싱하여 리스트로 돌려줌 array

window.console.log("글자 갯수 돌려줌: " + coffee.length); // 글자 갯수 돌려줌 (함수 아님)
