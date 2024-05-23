const toggleButton = document.getElementById('toggleButton');
const elements = document.querySelectorAll('.element');

toggleButton.addEventListener('click', () => {
  const selectedElements = document.querySelectorAll('input[name="element"]:checked');
  for (const element of elements) {
    if (selectedElements.length > 0) {
      for (const selectedElement of selectedElements) {
        if (selectedElement.value === element.id) {
          element.classList.toggle('hidden');
        }
      }
    } else {
      element.classList.toggle('hidden');
    }
  }
});
