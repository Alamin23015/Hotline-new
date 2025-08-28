// Counter elements
const lifeEl = document.querySelector("header div div:nth-child(1) p"); // Life count
const coinEl = document.querySelector("header div div:nth-child(2) p"); // Coin count
const copyEl = document.querySelector("header div div:nth-child(3) p"); // Copy count
const historyList = document.querySelector(".history-list");
const noCallsMsg = document.getElementById("no-calls");
const clearBtn = document.getElementById("btn-clear");

// Initial values
let life = 0;
let coin = 100;
let copy = 0;

// ✅ Life button click
document.querySelectorAll(".btn-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    life++;
    lifeEl.textContent = life;
  });
});

// ✅ Copy button click
document.querySelectorAll("button").forEach((btn) => {
  if (btn.textContent.trim() === "Copy") {
    btn.addEventListener("click", () => {
      copy++;
      copyEl.textContent = copy;
    });
  }
});

// ✅ Call button click
document.querySelectorAll(".btn-call").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coin >= 20) {
      coin -= 20;
      coinEl.textContent = coin;

      // Call info
      const card = btn.closest(".relative");
      const serviceName = card.querySelector("h3").textContent;
      const serviceNumber = card.querySelector("p.text-3xl").textContent;

      // Remove "No calls yet"
      if (noCallsMsg) noCallsMsg.remove();

      // Add to history
      const callItem = document.createElement("p");
      callItem.classList.add("border-b", "p-2", "text-sm");
      callItem.textContent = `Called ${serviceName} (${serviceNumber})`;
      historyList.appendChild(callItem);
    } else {
      alert("Not enough coins to make a call!");
    }
  });
});

// ✅ Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  const noCalls = document.createElement("p");
  noCalls.id = "no-calls";
  noCalls.classList.add("text-center", "text-gray-400");
  noCalls.textContent = "No calls yet. Your calls will appear here.";
  historyList.appendChild(noCalls);
});
