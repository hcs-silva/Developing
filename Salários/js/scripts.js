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
const subsidioPagoFerias = document.querySelector("#pagoF");
const subsidioNaoPagoFerias = document.querySelector("#nao-pagoF");
const subsidioPagoNatal = document.querySelector("#pagoN");
const subsidioNaoPagoNatal = document.querySelector("#nao-pagoN");
const fezHoras = document.querySelector("#fez");
const naoFezHoras = document.querySelector("#nao-fez");
const formHoras = document.querySelector("#horas-mes");
const horas50 = document.querySelector("#horas50");
const horas75 = document.querySelector("#horas75");
const horas100 = document.querySelector("#horas100");
const horasNoturnas = document.querySelector("#horas-noturnas-trabalhadas");
const horasNoturnasBox = document.querySelector("#horas-noturnas");
const noturnas = document.querySelector("#Noturnas");

const bruto = document.querySelector("#bruto");
const extra = document.querySelector("#extra");
const extraBox = document.querySelector("#extra-box");
const duodecimoNatal = document.querySelector("#duodecimoN");
const duodecimoFerias = document.querySelector("#duodecimoF");
const porTurnos = document.querySelector("#por-turnos");
const semTurnos = document.querySelector("#sem-turnos");

const descIrs = document.querySelector("#descIrs");
const descSegSocial = document.querySelector("#seg-social");
const descPorFaltas = document.querySelector("#por-faltas");
const totalDescontos = document.querySelector("#total-descontos");
const liquido = document.querySelector("#liquido");
const subsidioFeriasCheck = document.querySelector("#confirmacaoF");
const subsidioNatalCheck = document.querySelector("#confirmacaoN");
const subsidioCompleto = document.querySelector("#subsidioCompleto");
const totalSubAlim = document.querySelector("#subsidioAlimentacao");
const subsidioAlimIrs = document.querySelector("#subsidioAlimentacaoIrs");
const contratoFull = document.querySelector("#full-time");
const contratoPart = document.querySelector("#part-time");
const numberInputs = document.querySelectorAll('input[type="number"]');
const valorAlim = document.querySelector("#diarioAlim");
const recebeSubAlim = document.querySelector("#recebe");
const naoRecebeSubAlim = document.querySelector("#nao-recebe");
const valorAlimBox = document.querySelector("#diarioAlimBox");
const ticket = document.querySelector("#euroTicket");
const dinheiro = document.querySelector("#money");
const tipoPagamento = document.querySelector("#tipo-pagamento");

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
const clearBtnPageOne = document.querySelector("#clear-btn-pageOne");
const clearBtnPageTwo = document.querySelector("#clear-btn-pageTwo");
const clearBtnPageThree = document.querySelector("#clear-btn-pageThree");
const restart = document.querySelector("#restart");

// Funções
function duodecimos(vencBase) {
  const duodecimos = radioBtnNo.checked ? 0 : (vencBase / 12).toFixed(2);
  if (radioBtnNo.checked && !radioBtnYes.checked) {
    subsidioFeriasCheck.classList.remove("hide");
    subsidioNatalCheck.classList.remove("hide");
    duodecimoFerias.classList.add("hide");
    duodecimoNatal.classList.add("hide");
  }

  if (!radioBtnNo.checked && radioBtnYes.checked) {
    subsidioFeriasCheck.classList.add("hide");
    subsidioNatalCheck.classList.add("hide");
    duodecimoFerias.classList.remove("hide");
    duodecimoNatal.classList.remove("hide");
  }

  return duodecimos;
}

// Valida a existência de apenas números e um ponto decimal

function validateNumberInput(input) {
  if (input.type === "number") {
    const maxLength = 10;
    let value = input.value;  
    const regex = /^\d{1,3}(?:[.,]\d+)?$/;
    if (!regex.test(value)) {
      value = value.replace(/[^\d.,]+/g, "");
      value = value.replace(",", ".");
    }

    if(value.length > maxLength){
      value = value.substring(0, maxLength);
    }

    input.value = value;
  }
}

function totalHorasMes(horasTrabalhadas) {
  let totalHorasMensal = 0;
  if (contratoFull.checked && !contratoPart.checked) {
    totalHorasMensal = 176;
  }

  if (!contratoFull.checked && contratoPart.checked) {
    totalHorasMensal = horasTrabalhadas * 4;
  }
  return totalHorasMensal;
}

// Previne e, E, +, - de serem escritos no campo
numberInputs.forEach((input) => {
  // Prevent e, E, +, - characters from being typed
  input.addEventListener("keydown", function (event) {
    if (["e", "E", "+", "-"].includes(event.key)) {
      event.preventDefault();
    }
  });
});

// Devolve o valor do subsidio de férias ou natal, se tiver sido recebido.
function subsidioRecebido(vencBase) {
  let subsidio =
    subsidioPagoNatal.checked || subsidioPagoFerias.checked ? vencBase : 0;
  if (radioBtnYes.checked) {
    subsidio = 0;
    subsidioCompleto.classList.add("hide");
  } else {
    if (
      (subsidioPagoFerias.checked && !subsidioNaoPagoFerias.checked) ||
      (subsidioPagoNatal.checked && !subsidioNaoPagoNatal.checked)
    ) {
      subsidioCompleto.classList.remove("hide");
    }

    if (
      (!subsidioPagoFerias.checked && subsidioNaoPagoFerias.checked) ||
      (!subsidioPagoNatal.checked && subsidioNaoPagoNatal.checked)
    ) {
      subsidioCompleto.classList.add("hide");
    }
  }
  console.log(subsidio);
  return subsidio;
}

//Calcula o proporcional do subsidio de alimentação para part-times iguais ou superiores a 5 horas diárias.
function proporcionalTempoTrabalhado(horasTrabalhadas, valorAlim) {
  const horasDiarias = horasTrabalhadas / 5;
  let alimFinal = 0;
  if (contratoPart.checked && horasDiarias < 5) {
    alimFinal = 0;
  }

  if (contratoPart.checked && horasDiarias >= 5) {
    alimFinal = (horasDiarias / 8) * valorAlim;
  }

  return alimFinal;
}

function calcAlim(valorAlim, faltas, alimFinal) {
  if (recebeSubAlim.checked && !naoRecebeSubAlim.checked) {
    totalSubAlim.classList.remove("hide");
    subsidioAlimIrs.classList.remove("hide");
  }

  if (!recebeSubAlim.checked && naoRecebeSubAlim.checked) {
    totalSubAlim.classList.add("hide");
    subsidioAlimIrs.classList.add("hide");
  }
  const faltasEmDias = (faltas / 8).toFixed(1);

  let alimParaDescontos = 0;
  if (contratoFull.checked) {
    if (dinheiro.checked && valorAlim > 6) {
      alimParaDescontos = (valorAlim - 6) * (22 - faltasEmDias);
    }

    if (ticket.checked && valorAlim > 9) {
      alimParaDescontos = (valorAlim - 9) * (22 - faltasEmDias);
    }
  }

  if (contratoPart.checked) {
    if (alimFinal > 0) {
      if (dinheiro.checked && valorAlim > 6) {
        alimParaDescontos = (valorAlim - 6) * (22 - faltasEmDias);
      }

      if (ticket.checked && valorAlim > 9) {
        alimParaDescontos = (valorAlim - 9) * (22 - faltasEmDias);
      }
    } else {
      alimParaDescontos = 0;
    }
  }
  console.log(alimParaDescontos);
  return alimParaDescontos;
}

// Toggle do campo de valor diario do subsidio de alimentação

function toggleAlim() {
  if (recebeSubAlim.checked && !naoRecebeSubAlim.checked) {
    valorAlimBox.classList.remove("hide");
    tipoPagamento.classList.remove("hide");
  }

  if (!recebeSubAlim.checked && naoRecebeSubAlim.checked) {
    valorAlimBox.classList.add("hide");
    tipoPagamento.classList.add("hide");
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
    extra.classList.add("hide");
  }

  if (fezHoras.checked && !naoFezHoras.checked) {
    extra.classList.remove("hide");
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
  const precoHora = parseFloat(((base * 12) / (52 * horasSemana)).toFixed(2));
  console.log(precoHora);
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
  console.log(nightHours);
  return isNaN(nightHours) ? 0 : nightHours;
}

// Calcula o valor a deduzir das faltas do funcionário
function naoRemuneradoFull(faltas, precoHora) {
  let valorDescontadoFull = 0;
  if (contratoFull.checked && faltas > 173) {
    alert("Número de faltas não pode ser superior ao tempo trabalhado.");
    valorDescontadoFull = 0;
  }
  if (contratoFull.checked && faltas <= 173) {
    valorDescontadoFull = faltas * precoHora;
  }
  console.log(valorDescontadoFull);
  return valorDescontadoFull;
}

function naoRemuneradoPart(faltas, precoHora, horasTrabalhadas) {
  let valorDescontadoPart = 0;

  if (contratoPart.checked && faltas > horasTrabalhadas * 4) {
    alert("Número de faltas não pode ser superior ao tempo trabalhado.");
    return;
  }

  if (contratoPart.checked && faltas <= horasTrabalhadas * 4) {
    valorDescontadoPart = faltas * precoHora;
  }
  console.log(valorDescontadoPart);
  return valorDescontadoPart;
}

function vencLiquido(
  vencBase,
  duodecimos,
  naoRemuneradoPart,
  naoRemuneradoFull,
  comission,
  subsidio,
  totalHoras,
  nightHours,
  alimParaDescontos
) {
  const vencBruto = (
    vencBase +
    duodecimos * 2 +
    subsidio +
    totalHoras +
    nightHours +
    alimParaDescontos +
    comission -
    naoRemuneradoPart -
    naoRemuneradoFull
  ).toFixed(2);

  console.log(
    vencBase,
    duodecimos,
    subsidio,
    totalHoras,
    nightHours,
    alimParaDescontos,
    comission,
    naoRemuneradoPart,
    naoRemuneradoFull
  );
  const taxBracket = taxdata.find(
    (item) => vencBruto > item.min && vencBruto <= item.max
  );
  const irs = taxBracket ? vencBruto * taxBracket.taxa : 0;

  const segSocial = vencBruto * 0.11;

  const liquido = (vencBruto - (irs + segSocial)).toFixed(2);

  return liquido;
}

function calcular() {
  const faltas = document.querySelector("#faltas");
  const base = parseFloat(vencBase.value);
  const commission = parseFloat(comission.value);
  const absences = parseFloat(faltas.value);
  const subsidio = parseFloat(subsidioRecebido(vencBase.value));
  const horas = parseFloat(horasTrabalhadas.value);
  const custoHora = parseFloat(valorHora(base, horas));
  const horasNoiteVal = parseFloat(horasNoturnas.value);
  const faltasEmDias = parseFloat((absences / 8).toFixed(1));
  const valorAlimValue = parseFloat(valorAlim.value);
  const totalAlim = parseFloat(
    contratoPart.checked
      ? proporcionalTempoTrabalhado(horasTrabalhadas, valorAlimValue)
      : valorAlimValue * (22 - faltasEmDias)
  ).toFixed(2);

  const horas50Val = parseFloat(horas50.value);
  const horas75Val = parseFloat(horas75.value);
  const horas100Val = parseFloat(horas100.value);

  const totalHoras = parseFloat(
    horasExtraordinarias(horas50Val, horas75Val, horas100Val, custoHora)
  );

  const alimDesc = parseFloat(
    calcAlim(
      valorAlimValue,
      absences,
      proporcionalTempoTrabalhado(horasTrabalhadas, valorAlimValue)
    )
  );

  const nightHours = parseFloat(horasNoite(horasNoiteVal)) || 0; // Properly calculate night hours

  const duodec = parseFloat(duodecimos(base));
  const naoRemFull = parseFloat(naoRemuneradoFull(absences, custoHora));
  const naoRemPart = parseFloat(naoRemuneradoPart(absences, custoHora, horas));

  // Verifica o tipo de contrato e devovle o valor das faltas.
  const partOrFull = contratoPart.checked
    ? naoRemPart.toFixed(2)
    : naoRemFull.toFixed(2);

  console.log(partOrFull);

  const vencBruto = parseFloat(
    base +
      duodec * 2 +
      commission +
      totalHoras +
      nightHours +
      alimDesc +
      subsidio -
      naoRemFull -
      naoRemPart
  ).toFixed(2);

  console.log(
    base,
    duodec,
    commission,
    totalHoras,
    nightHours,
    alimDesc,
    subsidio,
    naoRemFull,
    naoRemPart
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
    naoRemFull,
    naoRemPart,
    commission,
    subsidio,
    totalHoras,
    nightHours,
    alimDesc
  );

  duodecimoNatal.textContent = `O seu Duodécimo do Subsídio de Natal é: ${duodec}€`;
  duodecimoFerias.textContent = `O seu Duodécimo do Subsídio de Férias é: ${duodec}€`;
  bruto.textContent = `O seu Vencimento Bruto é ${parseFloat(vencBruto)} €`;
  extra.textContent = `O Seu Total de Horas Extra é: ${totalHoras.toFixed(
    2
  )} €`;
  liquido.textContent = `${vencFinal} €`;
  totalDescontos.textContent = `${totalDesc} €`;
  descIrs.textContent = `${irs.toFixed(2)} €`;
  descSegSocial.textContent = `${segSocial.toFixed(2)} €`;
  descPorFaltas.textContent = ` ${partOrFull}€`;
  subsidioCompleto.textContent = `O valor do seu Subsídio é de: ${subsidio.toFixed(
    2
  )}€`;
  noturnas.textContent = `O Seu Total de Horas Noturnas é: ${nightHours}€`;
  totalSubAlim.textContent = `O valor do seu Subsídio de Alimentação é de: ${totalAlim} €`;
  subsidioAlimIrs.textContent = `O valor do seu Subsídio de Alimentação sujeito a IRS é de: ${alimDesc} €`;
}

function clearAll() {
  vencBase.value = null;
  comission.value = null;
  faltas.value = null;
  horasTrabalhadas.value = null;
  horas50.value = null;
  horas75.value = null;
  horas100.value = null;
  valorAlim.value = null;
  horasNoturnas.value = null;
  radioBtnNo.checked = false;
  radioBtnYes.checked = false;
  subsidioPagoFerias.checked = false;
  subsidioPagoNatal.checked = false;
  subsidioNaoPagoFerias.checked = false;
  subsidioNaoPagoNatal.checked = false;
  radioBtnNo.checked = false;
  radioBtnYes.checked = false;
  contratoFull.checked = false;
  contratoPart.checked = false;
  fezHoras.checked = false;
  naoFezHoras = false;
  porTurnos.checked = false;
  semTurnos.checked = false;
  recebeSubAlim.checked = false;
  naoRecebeSubAlim.checked = false;
  ticket.checked = false;
  dinheiro.checked = false;
  horasNoturnasBox.classList.add("hide");
  tipoPagamento.classList.add("hide");
  valorAlimBox.classList.add("hide");
  formHoras.classList.add("hide");
  horasTrabalhadasBox.classList.add("hide");
  subsidioFeriasCheck.classList.add("hide");
  subsidioNatalCheck.classList.add("hide");
}

function clearPageOne() {
  porTurnos.checked = false;
  semTurnos.checked = false;
  recebeSubAlim.checked = false;
  naoRecebeSubAlim.checked = false;
  ticket.checked = false;
  dinheiro.checked = false;
  horasNoturnas.value = null;
  vencBase.value = null;
  valorAlim.value = null;
  horasNoturnasBox.classList.add("hide");
  tipoPagamento.classList.add("hide");
  valorAlimBox.classList.add("hide");
}

function clearPageTwo() {
  contratoFull.checked = false;
  contratoPart.checked = false;
  fezHoras.checked = false;
  naoFezHoras.checked = false;
  horasTrabalhadas.value = null;
  horas50.value = null;
  horas75.value = null;
  horas100.value = null;
  formHoras.classList.add("hide");
  horasTrabalhadasBox.classList.add("hide");
}

function clearPageThree() {
  radioBtnNo.checked = false;
  radioBtnYes.checked = false;
  subsidioPagoFerias.checked = false;
  subsidioPagoNatal.checked = false;
  subsidioNaoPagoFerias.checked = false;
  subsidioNaoPagoNatal.checked = false;
  comission.value = null;
  faltas.value = null;
  subsidioFeriasCheck.classList.add("hide");
  subsidioNatalCheck.classList.add("hide");
}

//Eventos
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Verificar validade do formulário
  if (form.checkValidity()) {
    if (!vencBase.value || !comission.value || !faltas.value) return;
    pageThree.classList.add("hide");
    result.classList.remove("hide");
    calcular();
  } else {
    //faz foco no campo required.
    form.reportValidity();
    form.reportValidity();
    const invalidField = form.querySelector(":invalid");
    const pageId = invalidField.closest('[id^="page-"]').id;
    document.getElementById(pageId).classList.remove("hide");
    pageThree.classList.add("hide");
    invalidField.focus();
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

clearBtnPageOne.addEventListener("click", (e) => {
  e.preventDefault();
  clearPageOne();
});

clearBtnPageTwo.addEventListener("click", (e) => {
  e.preventDefault();
  clearPageTwo();
});

clearBtnPageThree.addEventListener("click", (e) => {
  e.preventDefault();
  clearPageThree();
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
