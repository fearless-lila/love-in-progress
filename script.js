// 💘 Day counter
const startDate = new Date("2024-06-07"); // Adjust to your real date
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

const letter2 = document.getElementById("loveLetter2");
const message2 = document.getElementById("message2");
letter2.addEventListener("click", () => {
  message2.style.display = message2.style.display === "block" ? "none" : "block";
});

const letter3 = document.getElementById("loveLetter3");
const message3 = document.getElementById("message3");
letter3.addEventListener("click", () => {
  message3.style.display = message3.style.display === "block" ? "none" : "block";
});





// Gallery interactive thumbnails
const currentImg = document.getElementById("current");
const captionText = document.getElementById("caption");
const thumbnails = document.querySelectorAll(".thumbnails img.thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    // Update main image src and alt
    currentImg.src = thumb.src;
    currentImg.alt = thumb.alt;

    // Update caption from data attribute
    captionText.textContent = thumb.dataset.caption;

    // Remove active class from all thumbs
    thumbnails.forEach(t => t.classList.remove("active"));

    // Add active class to clicked thumb
    thumb.classList.add("active");
  });
});
