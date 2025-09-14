const botButton = document.getElementById("bot-button");
    const offerBox = document.getElementById("offer-box");
    const chatBox = document.getElementById("chat-box");
    const chatBody = document.getElementById("chat-body");

    botButton.addEventListener("click", () => {
      chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
    });

    botButton.addEventListener("dragend", (e) => {
      botButton.style.left = e.pageX + "px";
      botButton.style.top = e.pageY + "px";
      botButton.style.bottom = "auto";
      botButton.style.right = "auto";
    });

    offerBox.addEventListener("dragend", (e) => {
      offerBox.style.left = e.pageX + "px";
      offerBox.style.top = e.pageY + "px";
    });

    function suggestBooks(mood) {
      const moodSuggestions = {
        happy: ["The Alchemist", "Pride and Prejudice"],
        sad: ["The Fault in Our Stars", "A Man Called Ove"],
        motivated: ["Atomic Habits", "Can't Hurt Me"],
        curious: ["Sapiens", "Thinking, Fast and Slow"]
      };

      const books = moodSuggestions[mood] || [];
      const msg = document.createElement("div");
      msg.className = "chat-msg";
      msg.innerHTML = `<strong>${mood.toUpperCase()} Mood:</strong><br>${books.join("<br>")}`;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTooltip() {
      document.getElementById("tooltip").style.display = "block";
    }

    function hideTooltip() {
      document.getElementById("tooltip").style.display = "none";
    }
    // <!-- Drag and Drop Functionality for Book Image -->
  

 
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", function () {
    // Close all other flipped cards
    document.querySelectorAll(".flip-card").forEach(c => {
      if (c !== card) c.classList.remove("flip");
    });

    // Toggle the clicked card
    card.classList.toggle("flip");
  });
});
