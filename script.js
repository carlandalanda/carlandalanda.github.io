// Define unlock dates (YYYY-MM-DD format)
const unlockDates = {
  btn1: "2026-06-05",
  btn2: "2026-06-10"
};

Object.keys(unlockDates).forEach(id => {
  const btn = document.getElementById(id);
  const letter = document.getElementById("letter" + id.slice(-1));
  
  const today = new Date();
  const unlockDate = new Date(unlockDates[id]);

  if (today < unlockDate) {
    btn.disabled = true;
    btn.textContent += ` (Opens on ${unlockDate.toDateString()})`;
  } else {
    btn.addEventListener("click", () => {
      letter.style.display = "block";
    });
  }
});
