const nextButton = document.getElementById('nextButton');
const catImage = document.getElementById('catImage');

nextButton.addEventListener('click', () => {
  fetch('/next')
    .then(response => response.json())
    .then(data => {
      catImage.src = data.image;
    })
    .catch(error => {
      console.error('Error fetching next cat image:', error.message);
    });
});

setInterval(() => {
  nextButton.click();
}, 8000);
