const buttons = document.querySelectorAll(".copy");
const copyNum = [];
for (const button of buttons) {
  button.addEventListener("click", async function () {
    const parent = button.parentNode.parentNode;
    const childH1 = parent.querySelector(".number");
    const text = childH1.innerText;
    await navigator.clipboard.writeText(text);
    copyNum.push(text);
    alert("copied : " + text);
    console.log(copyNum.length);
    const totalCopy = document.getElementById("totalCopy");
    totalCopy.innerText = copyNum.length;
    const totalCopy1 = document.getElementById("totalCopy1");
    totalCopy1.innerText = copyNum.length;
    return copyNum;
  });
}

const hearts = document.getElementsByClassName("heart");
let count = 0;
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    console.log("heart clicked");
    count = count + 1;
    document.getElementById("heartNum").innerText = count;
    document.getElementById("heartNum1").innerText = count;
  });
}

let callBtn = document.getElementsByClassName("call");
let coin = parseInt(document.getElementById("coin").innerText);
let coinss = parseInt(document.getElementById("coinss").innerText);

for (let btn of callBtn) {
  btn.addEventListener("click", function () {
    if (coin >= 20) {
      const parent = btn.parentNode.parentNode;
      const childH2 = parent.querySelector("h2").innerText;
      const childp = parent.querySelector(".number").innerText;
      alert("calling " + childH2 + " " + childp);
      coin = coin - 20;
      coinss = coinss - 20;
      document.getElementById("coin").innerText = coin;
      document.getElementById("coinss").innerText = coinss;
    } else {
      alert("Not enough coins");
    }
  });
}
