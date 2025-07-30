const eng_score = +window.prompt("영어점수 입력")
if(eng_score >= 90){
    window.console.log("A")
}else if(eng_score >= 80){
    window.console.log("B")
}else if(eng_score >= 70){
    window.console.log("C")
}else if(eng_score >= 60){
    window.console.log("D")
}else {
    window.console.log("F")
}

const num = +window.prompt("정수 입력")
const isPostive = num > 0
const isNegative = num < 0
const isOdd = num % 2 == 1 || num % 2 == -1
const isEven = num % 2 == 0

if(isPostive && isOdd){
    window.console.log("양의 홀수")
}else if(isPostive && isEven){
    window.console.log("양의 짝수")
}else if(isNegative && isOdd){
    window.console.log("음의 홀수")
}else if(isNegative && isEven){
    window.console.log("음의 짝수") 
}else {
    window.console.log("0") 
}








// 정수를 하나 주시면, '양의 홀수', '양의 짝수', '음의 홀수', '음의 짝수'
// 또는 0 을 콘솔로 출력