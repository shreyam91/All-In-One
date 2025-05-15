const radios = document.querySelectorAll('input[name="unit"]');
const totalDisplay = document.getElementById('total');

// Predefined options
const sizes = ["S", "M", "L"];
const colors = ["Black", "White", "Red", "Yellow"];

function createDropdowns(count) {
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `
      <div>
        #${i}: 
        <select>${sizes.map(s => `<option>${s}</option>`).join('')}</select>
        <select>${colors.map(c => `<option>${c}</option>`).join('')}</select>
      </div>
    `;
  }
  return html;
}

// function updateDropdowns() {
//   const selected = document.querySelector('input[name="unit"]:checked');
//   const selectedUnits = parseInt(selected.value);

//   document.querySelectorAll('.selectors').forEach(el => {
//     const unit = parseInt(el.dataset.selector);
//     if (unit === selectedUnits) {
//       el.innerHTML = createDropdowns(unit);
//     } else {
//       el.innerHTML = '';
//     }
//   });
// }

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const price = radio.dataset.price;
    totalDisplay.textContent = `Total: $${parseFloat(price).toFixed(2)} USD`;
    updateDropdowns();
  });
});

// Initial load
updateDropdowns();
