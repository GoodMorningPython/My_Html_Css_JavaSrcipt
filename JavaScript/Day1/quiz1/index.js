function square(num1){
    return num1 * num1
}
function goodFood(food){
    return food + " is good!"
}
function odd_even(num2){
    num2 = Number(num2)
    if(num2 % 2 == 0){
        return num2 + " is even!"
    }
    else{
        return num2 + " is odd!"
    }
}
function fectory(num3_repeat){
    let numbers = num3_repeat.split(" ").map(Number)
    let [num3, repeat] = numbers
    let fect = []
    for(let i=0; i<repeat; i++){
        fect[i] = num3*(i+1)
    }
    return "팩토리 결과: " + fect
}

const num1 = window.prompt("제곱할 수를 입력하십시오. :")
const food = window.prompt("좋아하는 음식 이름을 입력하십시오. :")
const num2 = window.prompt("홀짝을 계산할 수를 입력하십시오. :")
const num3_repeat = window.prompt("초기값과 팩토리 횟수를 입력하십시오. (띄어쓰기로 총 2개를 입력하십시오):")

window.console.log(square(num1))
window.console.log(goodFood(food))
window.console.log(odd_even(num2))
window.console.log(fectory(num3_repeat))