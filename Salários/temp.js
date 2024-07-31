if (input.type === "number") {
  let value = input.value;

  // Remove all non-digit characters except for comma and period
  value = value.replace(/[^\d.,]/g, '');

  // Ensure only one decimal point
  const parts = value.split(/[.,]/);
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }

  if (value.endsWith(',')) {
    value = value.replace(',', '.');
  }

  input.value = value;
}


// adicionados event listeners para eventos de input e paste para validar os campos de input com type number
input.addEventListener("input", function () {
  validateNumberInput(this);
});

input.addEventListener("paste", function () {
  validateNumberInput(this);
});