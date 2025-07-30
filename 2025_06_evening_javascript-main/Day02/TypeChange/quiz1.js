//1. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이를 콘솔로 나타내기
// 결과) 한 변의 길이 ${}인 정사각형의 넓이:{}
const side = window.prompt("한 변의 길이 입력")
window.console.log(`한 변의 길이 ${side}인 정사각형의 넓이:${Number(side) * Number(side)}`)

//2. 유저에게 밑변과 높이를 입력 받고, 삼각형의 넓이를 콘솔로 나타내기
// 결과) 밑변 ${}과 높이 ${}인 삼각형의 넓이:{}
const base = window.prompt("밑변의 길이 입력")
const height = window.prompt("높이의 길이 입력")
const width = Number(base) * Number(height) * 0.5
window.console.log(`밑변 ${base}과 높이 ${height}인 삼각형의 넓이:${width}`)

//3. 유저에게 일본여행 갈겸, 원화를 입력 받고 엔화로 콘솔로 나타내기
// 결과) 1000000원은 ~~~엔 입니다!
const won = window.prompt("원화 입력")
const yen = Number(won) * 9.33
window.console.log(`${won}원은 ${yen}엔 입니다!`)


//4. 유저에게 신장과 몸무게를 입력받고 BMI 지수로 콘솔로 나타내기
// 결과) 키: ~~ 몸무게: ~~ BMI: ~~
const height1 = window.prompt("키몇?")
const weight = window.prompt("몸무게몇?")
const bmi = Number(weight) / (Number(height1) * Number(height1))
window.console.log(`키: ${height1} 몸무게: ${weight} BMI: ${bmi}`)

//5. 유저에게 몇분을 입력 받고 몇초인지 콘솔로 나타내기
// 결과) 분: ~~ 초: ~~
const min = window.prompt("몇분?")
const sec = Number(min) * 60
window.console.log(`분:${min} 초:${sec}`)