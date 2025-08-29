const buttons = document.querySelectorAll(".copy");
const copyNum = [];
for (const button of buttons) {
  button.addEventListener("click", async function () {
    const parent = button.parentNode.parentNode;
    const childH1 = parent.querySelector(".number");
    const text = childH1.innerText;
    await navigator.clipboard.writeText(text);
    copyNum.push(text);
    alert("Copied Number is: " + text);
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
    // console.log("heart clicked");
    count = count + 1;
    document.getElementById("heartNum").innerText = count;
    document.getElementById("heartNum1").innerText = count;
  });
}

let callBtn = document.getElementsByClassName("call");
let coin = parseInt(document.getElementById("coin").innerText);
let coinss = parseInt(document.getElementById("coinss").innerText);
let historyDiv = document.getElementById("entri");

for (let btn of callBtn) {
  btn.addEventListener("click", function () {
    if (coin >= 20) {
      const parent = btn.parentNode.parentNode;
      const childH2 = parent.querySelector("h2").innerText;
      const childp = parent.querySelector(".number").innerText;
      alert("📞 calling " + childH2 + " " + childp);
      coin = coin - 20;
      coinss = coinss - 20;
      document.getElementById("coin").innerText = coin;
      document.getElementById("coinss").innerText = coinss;
      let time = new Date().toLocaleString(); // current date & time
      let entry = document.createElement("p");
      entry.innerText = `${childH2}          ${time}
      (${childp}) `;

      entry.style.backgroundColor = "#2B3856";
      entry.style.fontSize = "18px";
      entry.style.color = "white";
      entry.style.padding = "8px";
      entry.style.borderRadius = "8px";
      entry.style.marginBottom = "10px";
      entry.style.boxShadow = "2px 2px 5px gray";
      historyDiv.prepend(entry);
      const clear = document
        .getElementById("clear")
        .addEventListener("click", function () {
          document.getElementById("entri").innerText = "";
          coin = 100;
          coinss = 100;
          document.getElementById("coin").innerText = coin;
          document.getElementById("coinss").innerText = coinss;
        });
    } else {
      alert("Not enough coins");
    }
  });
}
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("history-btn").style.backgroundColor = "red";
  document.querySelector("#entry").style.display = "block";
});
