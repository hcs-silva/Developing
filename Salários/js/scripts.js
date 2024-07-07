// Data
const taxdata = [
  { min: 0, max: 820, taxa: 0 },
  { min: 820, max: 935, taxa: 0.059 },
  { min: 935, max: 1001, taxa: 0.083 },
  { min: 1001, max: 1123, taxa: 0.094 },
  { min: 1123, max: 1765, taxa: 0.154 },
  { min: 1765, max: 2057, taxa: 0.179 },
  { min: 2057, max: 2664, taxa: 0.222 },
  { min: 2664, max: 3193, taxa: 0.25 },
  { min: 3193, max: 4173, taxa: 0.285 },
  { min: 4173, max: 5470, taxa: 0.315 },
  { min: 5470, max: 6540, taxa: 0.333 },
  { min: 6540, max: 20067, taxa: 0.412 },
];

// Seleção de Elementos

const form = document.querySelector("#salary-form");
const vencBase = document.querySelector("#base");
const horasTrabalhadas = document.querySelector("#horas-semanais-trabalhadas");
const horasTrabalhadasBox = document.querySelector("#horas-semanais");
const comission = document.querySelector("#comission");
const faltas = document.querySelector("#faltas");

const result = document.querySelector("#result-container");
const calcContainer = document.querySelector("#calc-container");

const radioBtnNo = document.querySelector("#nao-duodecimos");
const radioBtnYes = document.querySelector("#duodecimos");
const subsidioPago = document.querySelector("#pago");
const subsidioNaoPago = document.querySelector("#nao-pago");
const fezHoras = document.querySelector("#fez");
const naoFezHoras = document.querySelector("#nao-fez");
const formHoras = document.querySelector("#horas-mes");
const horas50 = document.querySelector("#horas50");
const horas75 = document.querySelector("#horas75");
const horas100 = document.querySelector("#horas100");
const horasNoturnas = document.querySelector("#horas-noturnas-trabalhadas");
const horasNoturnasBox = document.querySelector("#horas-noturnas");
const noturnas = document.querySelector("#Noturnas span");

const bruto = document.querySelector("#bruto span");
const extra = document.querySelector("#extra span");
const extraBox = document.querySelector("#extra");
const duodecimoNatal = document.querySelector("#duodecimoN span");
const duodecimoFerias = document.querySelector("#duodecimoF span");
const duodecimoNatalFull = document.querySelector("#duodecimoN");
const duodecimoFeriasFull = document.querySelector("#duodecimoF");
const porTurnos = document.querySelector("#por-turnos");
const semTurnos = document.querySelector("#sem-turnos");

const descIrs = document.querySelector("#descIrs");
const descSegSocial = document.querySelector("#seg-social");
const descPorFaltas = document.querySelector("#por-faltas");
const totalDescontos = document.querySelector("#total-descontos");
const liquido = document.querySelector("#liquido");
const subsidioCheck = document.querySelector("#confirmacao");
const subsidioCompleto = document.querySelector("#subsidioCompleto span");
const subsidioCompletoBox = document.querySelector("#subsidioCompleto");
const contratoFull = document.querySelector("#full-time");
const contratoPart = document.querySelector("#part-time");
const numberInputs = document.querySelectorAll('input[type="number"]');
const valorAlim = document.querySelector("#diarioAlim");
const recebeSubAlim = document.querySelector("#recebe");
const naoRecebeSubAlim = document.querySelector("#nao-recebe");
const valorAlimBox = document.querySelector("#diarioAlimBox");

//Seleção de páginas

const pageOne = document.querySelector("#page-one");
const pageTwo = document.querySelector("#page-two");
const pageThree = document.querySelector("#page-three");

// Seleção de Botões

const calcBtn = document.querySelector("#calc-btn");
const calcBtnPageOne = document.querySelector("#calc-btn-pageOne");
const calcBtnPageTwo = document.querySelector("#calc-btn-pageTwo");
const backBtn = document.querySelector("#back-btn");
const backBtnPageTwo = document.querySelector("#back-btn-pageTwo");
const backBtnPageThree = document.querySelector("#nack-btn-pageThree");
const backBtnResult = document.querySelector("#back-btn-result");
const clearBtn = document.querySelector("#clear-btn");
const clearBtnPageTwo = document.querySelector("#clear-btn-pageTwo");
const clearBtnPageThree = document.querySelector("#clear-btn-pageThree");
const restart = document.querySelector("#restart");

// Funções
function duodecimos(vencBase) {
  const duodecimos = radioBtnNo.checked ? 0 : (vencBase / 12).toFixed(2);
  if (radioBtnNo.checked && !radioBtnYes.checked) {
    subsidioCheck.classList.remove("hide");
    duodecimoFeriasFull.classList.add("hide");
    duodecimoNatalFull.classList.add("hide");
  }

  if (!radioBtnNo.checked && radioBtnYes.checked) {
    subsidioCheck.classList.add("hide");
    duodecimoFeriasFull.classList.remove("hide");
    duodecimoNatalFull.classList.remove("hide");
  }

  return duodecimos;
}

// Valida a existência de apenas números e um ponto decimal

function validateNumberInput(input) {
  if (input.type === "number") {
    let value = input.value;

    // Remove todos os caracteres não-digito.
    value = value.replace(/[^0-9.]/g, "");

    // Garante a existência de apenas um ponto decimal
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    // Actualiza o input value
    input.value = value;
  }
}

// Previne e, E, +, - de serem escritos no campo
numberInputs.forEach((input) => {
  // Prevent e, E, +, - characters from being typed
  input.addEventListener("keydown", function (event) {
    if (["e", "E", "+", "-"].includes(event.key)) {
      event.preventDefault();
    }
  });
  // adicionados event listeners para eventos de input e paste para validar os campos de input com type number
  input.addEventListener("input", function () {
    validateNumberInput(this);
  });

  input.addEventListener("paste", function () {
    validateNumberInput(this);
  });
});

// Devolve o valor do subsidio de férias ou natal, se tiver sido recebido.
function subsidioRecebido(vencBase) {
  let subsidio = subsidioPago.checked ? vencBase : 0;
  if (radioBtnYes.checked) {
    subsidio = 0;
    subsidioCompletoBox.classList.add("hide");
  } else {
    if (subsidioPago.checked && !subsidioNaoPago.checked) {
      subsidioCompletoBox.classList.remove("hide");
    }

    if (!subsidioPago.checked && subsidioNaoPago.checked) {
      subsidioCompletoBox.classList.add("hide");
    }
  }

  return subsidio;
}

// Toggle do campo de valor diario do subsidio de alimentação

function toggleAlim() {
  if (recebeSubAlim.checked && !naoRecebeSubAlim.checked) {
    valorAlimBox.classList.remove("hide");
  }

  if (!recebeSubAlim.checked && naoRecebeSubAlim.checked) {
    valorAlimBox.classList.add("hide");
  }
}

//Toggle form horas
function toggleHoras() {
  if (fezHoras.checked && !naoFezHoras.checked) {
    formHoras.classList.remove("hide");
  }

  if (!fezHoras.checked && naoFezHoras.checked) {
    formHoras.classList.add("hide");
  }
}

//Calcular valor das horas extra

function horasExtraordinarias(horas50, horas75, horas100, precoHora) {
  let totalHoras;
  if (!fezHoras.checked && naoFezHoras.checked) {
    totalHoras = 0;
    extraBox.classList.add("hide");
  } else {
    totalHoras =
      horas50 * (precoHora * 1.5) +
      horas75 * (precoHora * 1.75) +
      horas100 * (precoHora * 2);
  }
  console.log(totalHoras);
  return totalHoras;
}

// Determina o número de horas trabalhadas, conforme o tipo de contrato.

function tipoContrato() {
  if (contratoFull.checked) {
    horasTrabalhadasBox.classList.add("hide");
    horasTrabalhadas.removeAttribute("required");
  }

  if (!contratoFull.checked && contratoPart.checked) {
    horasTrabalhadasBox.classList.remove("hide");
    horasTrabalhadas.setAttribute("required", "required");
  }
}

//Calcula o valor por hora trabalhada (a fórmula é: (Remuneração base Mensal x 12)/(52 x Numero de horas trabalhadas semanalmente))

function valorHora(vencBase, horasTrabalhadas) {
  const base = parseFloat(vencBase);
  const horasSemana = contratoFull.checked ? 40 : parseFloat(horasTrabalhadas);
  const precoHora = (base * 12) / (52 * horasSemana);

  return precoHora;
}

//Calcula valor das horas noturnas

function horasNoite(horasNoturnas) {
  // Valor das horas noturnas tem em média acréscimo de 25%
  let nightHours = 0;
  if (porTurnos.checked && !semTurnos.checked) {
    horasNoturnasBox.classList.remove("hide");
    noturnas.classList.remove("hide");
    nightHours = horasNoturnas * 1.25;
  }

  if (!porTurnos.checked && semTurnos.checked) {
    horasNoturnasBox.classList.add("hide");
    noturnas.classList.add("hide");
    nightHours = 0;
  }

  return nightHours;
}

// Calcula o valor a deduzir das faltas do funcionário
function naoRemunerado(faltas, precoHora) {
  const naoRemunerado = (faltas * precoHora).toFixed(2);

  return naoRemunerado;
}

function vencLiquido(
  vencBase,
  duodecimos,
  naoRemunerado,
  comission,
  subsidio,
  totalHoras,
  nightHours
) {
  const vencBruto = (
    vencBase +
    duodecimos * 2 +
    subsidio +
    totalHoras +
    nightHours +
    comission -
    naoRemunerado
  ).toFixed(2);

  const taxBracket = taxdata.find(
    (item) => vencBruto > item.min && vencBruto <= item.max
  );
  const irs = taxBracket ? vencBruto * taxBracket.taxa : 0;

  const segSocial = vencBruto * 0.11;

  const liquido = (vencBruto - (irs + segSocial)).toFixed(2);

  return liquido;
}

function calcular() {
  if (!vencBase.value || !comission.value || !faltas.value) return;

  const base = parseFloat(vencBase.value);
  const commission = parseFloat(comission.value);
  const absences = parseFloat(faltas.value);
  const subsidio = parseFloat(subsidioRecebido(vencBase.value));
  const horas = parseFloat(horasTrabalhadas.value);
  const custoHora = parseFloat(valorHora(base, horas));
  const horasNoiteVal = parseFloat(horasNoturnas.value);

  const horas50Val = parseFloat(horas50.value);
  const horas75Val = parseFloat(horas75.value);
  const horas100Val = parseFloat(horas100.value);

  const totalHoras = horasExtraordinarias(
    horas50Val,
    horas75Val,
    horas100Val,
    custoHora
  );

  const nightHours = horasNoite(horasNoiteVal); // Properly calculate night hours

  const duodec = parseFloat(duodecimos(base));
  const naoRem = parseFloat(naoRemunerado(absences, custoHora));

  const vencBruto = parseFloat(
    (
      base +
      duodec * 2 +
      commission +
      totalHoras +
      nightHours +
      subsidio -
      absences
    ).toFixed(2)
  );

  const taxBracket = taxdata.find(
    (item) => vencBruto > item.min && vencBruto <= item.max
  );
  const irs = taxBracket ? vencBruto * taxBracket.taxa : 0;
  const segSocial = vencBruto * 0.11;

  const totalDesc = (irs + segSocial).toFixed(2);
  const vencFinal = vencLiquido(
    base,
    duodec,
    naoRem,
    commission,
    subsidio,
    totalHoras,
    nightHours
  );

  duodecimoNatal.textContent = duodec;
  duodecimoFerias.textContent = duodec;
  bruto.textContent = vencBruto;
  extra.textContent = totalHoras.toFixed(2);
  liquido.textContent = vencFinal;
  totalDescontos.textContent = totalDesc;
  descIrs.textContent = irs.toFixed(2);
  descSegSocial.textContent = segSocial.toFixed(2);
  descPorFaltas.textContent = naoRem.toFixed(2);
  subsidioCompleto.textContent = subsidio.toFixed(2);
  noturnas.textContent = nightHours.toFixed(2);
}

function clearAll() {
  vencBase.value = 0;
  comission.value = 0;
  faltas.value = 0;
  horasTrabalhadas.value = 0;
  horas50.value = 0;
  horas75.value = 0;
  horas100.value = 0;
  valorAlim.value = 0;
  horasNoturnas.value = 0;
}

function clearPageOne() {
  horasNoturnas.value = 0;
  vencBase.value = 0;
  valorAlim.value = 0;
}

function clearPageTwo() {
  horasTrabalhadas.value = 0;
  horas50.value = 0;
  horas75.value = 0;
  horas100.value = 0;
}

function clearPageThree() {
  comission.value = 0;
  faltas.value = 0;
}

//Eventos
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Verificar validade do formulário
  if (form.checkValidity()) {
    pageThree.classList.add("hide");
    result.classList.remove("hide");
    calcular();
  } else {
    //faz foco no campo required.
    form.reportValidity();
  }
});

radioBtnNo.addEventListener("change", () => {
  duodecimos(vencBase);
});

radioBtnYes.addEventListener("change", () => {
  duodecimos(vencBase);
});

contratoFull.addEventListener("change", tipoContrato);

contratoPart.addEventListener("change", tipoContrato);

semTurnos.addEventListener("change", horasNoite);

porTurnos.addEventListener("change", horasNoite);

fezHoras.addEventListener("change", () => {
  toggleHoras();
});

naoFezHoras.addEventListener("change", () => {
  toggleHoras();
});

recebeSubAlim.addEventListener("change", () => {
  toggleAlim();
});

naoRecebeSubAlim.addEventListener("change", () => {
  toggleAlim();
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pageTwo.classList.remove("hide");
  pageThree.classList.add("hide");
});

backBtnPageTwo.addEventListener("click", (e) => {
  e.preventDefault();
  pageTwo.classList.add("hide");
  pageOne.classList.remove("hide");
});

backBtnResult.addEventListener("click", (e) => {
  e.preventDefault();
  result.classList.add("hide");
  pageThree.classList.remove("hide");
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearPageThree();
});

clearBtnPageTwo.addEventListener("click", (e) => {
  e.preventDefault();
  clearPageTwo();
});

calcBtnPageOne.addEventListener("click", (e) => {
  e.preventDefault();
  pageOne.classList.add("hide");
  pageTwo.classList.remove("hide");
});

calcBtnPageTwo.addEventListener("click", (e) => {
  e.preventDefault();
  pageTwo.classList.add("hide");
  pageThree.classList.remove("hide");
});

restart.addEventListener("click", (e) => {
  e.preventDefault();
  clearAll();
  result.classList.add("hide");
  pageOne.classList.remove("hide");
});
