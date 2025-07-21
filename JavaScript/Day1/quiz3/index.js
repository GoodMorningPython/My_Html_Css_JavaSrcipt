const password_boolean = true;

while (password_boolean) {
  const password = window.prompt("초기 비밀번호를 입력하십시오: ");
  const rePassword = window.prompt("재확인용 비밀번호를 입력하십시오: ");
  if (password != rePassword) {
    window.alert("비밀번호가 같지 않습니다. 다시 입력해 주십시오: ");
  } else if (password.length < 4 || password.length > 12) {
    window.alert("비밀번호 길이가 맞지 않습니다. (길이 4~12 사이여야 함.)");
  } else if (
    password.includes("!") == false &&
    password.includes("@") == false &&
    password.includes("#") == false
  ) {
    window.alert("비밀번호에 @, !, #이 없습니다.");
  } else if (password.toLowerCase(password).startsWith("it") == false) {
    window.alert("비밀번호 시작이 it(IT, It, iT)가 아닙니다.");
  } else {
    window.alert("올바르게 비밀번호가 완성되었습니다.");
    password_boolean = false;
  }
}
