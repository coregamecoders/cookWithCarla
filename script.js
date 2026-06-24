const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", function () {
  const value = input.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});