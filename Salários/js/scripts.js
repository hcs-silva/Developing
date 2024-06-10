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
const vencBase = document.querySelector("#base");
const comission = document.querySelector("#comission");
const faltas = document.querySelector("#faltas");
const calcBtn = document.querySelector("#calc-btn");
const result = document.querySelector("#result-container");
const calcContainer = document.querySelector("#calc-container");
const backBtn = document.querySelector("#back-btn");
const clearBtn = document.querySelector("#clear-btn");
const radioBtnNo = document.querySelector("#nao");
const radioBtnYes = document.querySelector("#sim");
const SubsidioPago = document.querySelector("#pago");

const bruto = document.querySelector("#bruto span");
const duodecimoNatal = document.querySelector("#duodecimoN span");
const duodecimoFerias = document.querySelector("#duodecimoF span");

const descIrs = document.querySelector("#descIrs");
const descSegSocial = document.querySelector("#seg-social");
const totalDescontos = document.querySelector("#total-descontos");
const liquido = document.querySelector("#liquido");
const subsidioCheck = document.querySelector("#confirma-subsidio");
const subsidioCompleto = document.querySelector("#subsidioCompleto span");

// Funções
function duodecimos(vencBase) {
  const duodecimos = radioBtnNo.checked ? 0 : (vencBase / 12).toFixed(2);
  if (radioBtnNo.checked && !radioBtnYes.checked) {
    subsidioCheck.classList.remove("hide");
  }

  if (!radioBtnNo.checked && radioBtnYes.checked) {
    subsidioCheck.classList.add("hide");
  }
  return duodecimos;
}

function subsidioPago(vencBase) {
  const subsidio = subsidioCheck.checked ? 0 : vencBase;

  return subsidio;
}

function naoRemunerado(faltas) {
  const naoRemunerado = (faltas * 4.73).toFixed(2);

  return naoRemunerado;
}

function vencLiquido(vencBase, duodecimos, naoRemunerado, comission, subsidio) {
  const vencBruto = (
    vencBase +
    duodecimos * 2 +
    subsidio +
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

function clearAll() {
  vencBase.value = "";
  comission.value = "";
  faltas.value = "";
}

//Eventos
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!vencBase.value || !comission.value || !faltas.value) return;
  calcContainer.classList.add("hide");
  result.classList.remove("hide");
  const base = parseFloat(vencBase.value);
  const commission = parseFloat(comission.value);
  const absences = parseFloat(faltas.value);
  const subsidio = parseFloat(subsidioPago(vencBase.value));

  const duodec = parseFloat(duodecimos(base));
  const naoRem = parseFloat(naoRemunerado(absences));

  const vencBruto = parseFloat(
    (base + duodec * 2 + commission + subsidio - absences).toFixed(2)
  );

  const taxBracket = taxdata.find(
    (item) => vencBruto > item.min && vencBruto <= item.max
  );
  const irs = taxBracket ? vencBruto * taxBracket.taxa : 0;

  const segSocial = vencBruto * 0.11;

  const totalDesc = (irs + segSocial).toFixed(2);
  duodecimoNatal.textContent = duodec;
  duodecimoFerias.textContent = duodec;
  bruto.textContent = vencBruto;

  const vencFinal = vencLiquido(base, duodec, naoRem, commission, subsidio);

  liquido.textContent = vencFinal;
  totalDescontos.textContent = totalDesc;
  descIrs.textContent = irs.toFixed(2);
  descSegSocial.textContent = segSocial.toFixed(2);
  subsidioCompleto.textContent = subsidio.toFixed(2);
});

radioBtnNo.addEventListener("change", () => {
  duodecimos(vencBase);
});

radioBtnYes.addEventListener("change", () => {
  duodecimos(vencBase);
});

backBtn.addEventListener("click", () => {
  calcContainer.classList.remove("hide");
  result.classList.add("hide");
});

clearBtn.addEventListener("click", () => {
  clearAll();
});

// adicionar lógica para cálculo de valor/hora e horas extra.
