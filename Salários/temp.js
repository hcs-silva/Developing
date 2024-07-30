if (input.type === "number") {
    let value = input.value;

    // Remove todos os caracteres não-digito.
    value = value.replace(/[d\.]/g, "");

    // Garante a existência de apenas um ponto decimal
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    if (value.endsWith(".")) {
      return (input.value = value);
    } else {
      return (input.value = value.replace(/\.$/, ""));
    }
  }