const butt = document.querySelector(".butt");

// butt.addEventListener("이벤트 종류", 무엇을)

butt.addEventListener("click", () => {
  alert("Why did you click on me??");
});

const addButt = document.querySelector(".addButt");

const div1 = `
<div class="addDiv">americano!!</div>
`;

addButt.addEventListener("click", () => {
  const box = document.querySelector(".box");
  box.insertAdjacentHTML("beforeend", div1);
});
