// index1.js
const num = +window.prompt("정수 입력")

if(num > 0){
    window.console.log(`${num}은 양수 입니다.`)
}else if(num == 0){
    window.console.log(`${num}은 0 입니다.`)
}else{
    window.console.log(`${num}은 음수 입니다.`)
}

window.console.log("프로그램끝!")