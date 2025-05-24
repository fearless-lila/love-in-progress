// 💘 Day counter
const startDate = new Date("2022-03-15"); // Adjust to your real date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("daysCounter").textContent = `It’s been ${diffDays} days since we met 💘`;

// 🕰️ Timeline animation
const items = document.querySelectorAll("#timeline li");
let i = 0;
const revealTimeline = () => {
  if (i < items.length) {
    items[i].classList.add("visible");
    i++;
    setTimeout(revealTimeline, 600);
  }
};
revealTimeline();

// 💌 Reveal love letter
const letter = document.getElementById("loveLetter");
const message = document.getElementById("message");
letter.addEventListener("click", () => {
  message.style.display = message.style.display === "block" ? "none" : "block";
});
