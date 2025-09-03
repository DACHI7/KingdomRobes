// scripts.js

// Example: simple click handler for header buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("header button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`You clicked ${btn.innerText}! This can link to your products page.`);
    });
  });

  // Email signup form submission
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("emailInput").value;

      if (!emailInput) {
        alert("Please enter your email!");
        return;
      }

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: emailInput })
        });

        const data = await response.json();
        alert(data.message);
        emailForm.reset();
      } catch (error) {
        console.error(error);
        alert("Failed to send email. Try again later.");
      }
    });
  }
});
