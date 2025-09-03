function showCategory(category) {
  const categories = document.querySelectorAll('.category');
  categories.forEach(cat => cat.style.display = 'none');
  document.getElementById(category).style.display = 'block';
}

// Handle support form
document.getElementById('support-form').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  await fetch('/support', {
    method: 'POST',
    body: new URLSearchParams(formData)
  });
  alert('Message sent!');
});

// Handle signup form
document.getElementById('signup-form').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  await fetch('/signup', {
    method: 'POST',
    body: new URLSearchParams(formData)
  });
  alert('You are subscribed!');
});
