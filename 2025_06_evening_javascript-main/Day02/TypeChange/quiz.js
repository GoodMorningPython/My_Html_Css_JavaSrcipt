// 유저에게 첫 번째 숫자와 두 번째 숫자를 각각 입력 받고
// 알럿으로 첫번째숫자 + 두번째숫자 = 결과
const first = window.prompt("첫 번째 숫자 입력")
const second = window.prompt("두 번째 숫자 입력")
const result = Number(first) + Number(second)
window.alert(`${first} + ${second} = ${result}`)

// 유저에게 나이를 입력 받고
// 알럿으로 귀하의 태어난 년도는 ~~년도 입니다!
const age = window.prompt("몇살입니까?")
const year = 2026 - Number(age) 
window.alert(`귀하의 태어난 년도는 ${year}년도 입니다!`)







