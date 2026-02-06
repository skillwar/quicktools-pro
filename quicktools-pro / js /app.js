// app.js - QuickTools Pro Core Logic

document.addEventListener("DOMContentLoaded", () => {
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach(card => {
    card.addEventListener("click", () => {
      const toolName = card.innerText.toLowerCase();

      if (toolName.includes("qr")) {
        openTool("qr.html");
      } 
      else if (toolName.includes("image")) {
        openTool("image-tools.html");
      } 
      else if (toolName.includes("text")) {
        alert("Text Tools coming soon 🚀");
      } 
      else if (toolName.includes("time")) {
        alert("Time Tools coming soon ⏱️");
      } 
      else {
        alert("More tools coming soon ✨");
      }
    });
  });
});

function openTool(page) {
  window.location.href = page;
}
