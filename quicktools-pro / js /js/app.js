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
        showComingSoon("Text Tools");
      } 
      else if (toolName.includes("time")) {
        showComingSoon("Time Tools");
      } 
      else {
        showComingSoon("More Tools");
      }
    });
  });
});

/* ---------- Helper Functions ---------- */

function openTool(page) {
  window.location.href = page;
}

function showComingSoon(toolName) {
  alert(toolName + " coming soon ✨");
}
