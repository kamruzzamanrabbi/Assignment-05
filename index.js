//4. Heart Icons

const availableHeart = document.getElementById("available-heart");
const addHearts = document.querySelectorAll("#add-heart");
let heart = 0;

for (const btn of addHearts) {
  btn.addEventListener("click", function () {
    heart++;
    availableHeart.innerText = heart;
  });
}

//5. Call Buttons
let coins = 100;
const coinDisplay = document.getElementById("#coin-btn");
const callButtons = document.querySelectorAll("#call-btn");
const historyList = document.getElementById("#history-list");

// Loop through buttons without using "i"
for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const service = btn.getAttribute("data-service");
    const number = btn.getAttribute("data-number");
    // 1. Show alert
    alert(`Calling ${service} at ${number}...`);

    // 2. Deduct coins
    coins -= 20;
    coinDisplay.innerText = coins;
    // 3. If coins < 20 → stop
    if (coins < 20) {
      alert("Not enough coins for a call!");
      return;
    }

    // 4. Add to history
    const entry = document.createElement("div");
    entry.className = "history-item";
    entry.innerText = `Service: ${service}\nNumber: ${number}`;
    historyList.appendChild(entry);
  });
}
