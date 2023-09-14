const nextButton = document.getElementById('nextButton');
const mainElement = document.querySelector('main'); // Targeting the main element

nextButton.addEventListener('click', () => {
  fetch('/next')
    .then(response => response.json())
    .then(data => {
      const newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

      const newPolaroid = document.createElement('div');
      newPolaroid.className = 'polaroid';

      const newImage = document.createElement('img');
      newImage.src = data.image;
      newImage.alt = 'Cat Image';

      newPolaroid.appendChild(newImage);
      newItem.appendChild(newPolaroid);
      mainElement.appendChild(newItem);
    })
    .catch(error => {
      console.error('Error fetching next cat image:', error.message);
    });
});

setInterval(() => {
  nextButton.click();
}, 8000);
