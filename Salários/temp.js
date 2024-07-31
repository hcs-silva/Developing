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

//versão semi-funcional da validação de inputs

if (input.type === "number") {
  let value = input.value;

  // Remove all non-digit characters except for decimal point
  value = value.replace(/[^\d.]+/g, "");

  // Ensure only one decimal separator
  const decimalIndex = value.indexOf(".");
  if (decimalIndex !== -1) {
    value =
      value.slice(0, decimalIndex + 1) +
      value.slice(decimalIndex + 1).replace(/\./g, "");
  }

  // Prevent decimal point at the beginning of the input field
  if (value.startsWith(".")) {
    value = "0" + value;
  }

  input.value = value;
}
