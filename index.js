// Heart Count
const availableHeart = document.getElementById("available-heart");
const addHearts = document.querySelectorAll(".add-heart");
let heart = 0;

for (const btn of addHearts) {
  btn.addEventListener("click", function () {
    heart++;
    availableHeart.innerText = heart;
  });
}

// Coin & Call
let coins = 100;
const coinDisplay = document.getElementById("coin-btn");
const callButtons = document.querySelectorAll(".call-btn");
const historyList = document.getElementById("history-list");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const service = btn.getAttribute("data-service");
    const number = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins for call!");
      return;
    }

    alert(`Calling ${service} at ${number}...`);
    coins -= 20;
    coinDisplay.innerText = coins;

    //history item

    const entry = document.createElement("div");
    entry.classList.add("history-item", "flex", "justify-between", "bg-[#fafafa]", "rounded", "p-2", "mt-1");

    const infoDiv = document.createElement("div");
    const serviceName = document.createElement("h2");
    const serviceNumber = document.createElement("p");
    const timeDiv = document.createElement("div");

    serviceName.innerText = service;
    serviceNumber.innerText = number;
    timeDiv.innerText = new Date().toLocaleTimeString();

    infoDiv.appendChild(serviceName);
    infoDiv.appendChild(serviceNumber);

    entry.appendChild(infoDiv);
    entry.appendChild(timeDiv);

    historyList.appendChild(entry);

  });
 }



// Copy Button using chat gpt mama
const copyButtons = document.querySelectorAll(".copy-btn");
const copyCountBtn = document.querySelector(".copy-count");
let copyCount = 0;

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const number = btn.closest(".item").querySelector(".hotline").innerText;
    navigator.clipboard.writeText(number);
    alert(`Copied ${number}`);
    copyCount++;
    copyCountBtn.innerText = `${copyCount} Copy`;
  });
}

// Clear History
const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
