// Data
//Não casado sem dependentes ou casado dois titulares
const tableOne = [
  { min: 0, max: 820, taxa: 0, parcela: 0 },
  { min: 820, max: 935, taxa: 0.059, parcela: 21.43 },
  { min: 935, max: 1001, taxa: 0.083, parcela: 21.43 },
  { min: 1001, max: 1123, taxa: 0.094, parcela: 21.43 },
  { min: 1123, max: 1765, taxa: 0.154, parcela: 21.43 },
  { min: 1765, max: 2057, taxa: 0.179, parcela: 21.43 },
  { min: 2057, max: 2664, taxa: 0.222, parcela: 21.43 },
  { min: 2664, max: 3193, taxa: 0.25, parcela: 21.43 },
  { min: 3193, max: 4173, taxa: 0.285, parcela: 21.43 },
  { min: 4173, max: 5470, taxa: 0.315, parcela: 21.43 },
  { min: 5470, max: 6540, taxa: 0.333, parcela: 21.43 },
  { min: 6540, max: 20067, taxa: 0.412, parcela: 21.43 },
];

//Não casado com um ou mais dependentes
const tableTwo = [
  { min: 0, max: 820, taxa: 0, parcela: 0 },
  { min: 820, max: 935, taxa: 0.022, parcela: 34.29 },
  { min: 935, max: 1001, taxa: 0.049, parcela: 34.29 },
  { min: 1001, max: 1123, taxa: 0.063, parcela: 34.29 },
  { min: 1123, max: 1765, taxa: 0.135, parcela: 34.29 },
  { min: 1765, max: 2057, taxa: 0.162, parcela: 34.29 },
  { min: 2057, max: 2664, taxa: 0.21, parcela: 34.29 },
  { min: 2664, max: 3193, taxa: 0.239, parcela: 34.29 },
  { min: 3193, max: 4173, taxa: 0.277, parcela: 34.29 },
  { min: 4173, max: 5470, taxa: 0.308, parcela: 34.29 },
  { min: 5470, max: 6540, taxa: 0.328, parcela: 34.29 },
  { min: 6540, max: 20067, taxa: 0.41, parcela: 34.29 },
];

//Casado único titular
const tableThree = [
  { min: 0, max: 857, taxa: 0, parcela: 0 },
  { min: 857, max: 935, taxa: 0.04, parcela: 42.86 },
  { min: 935, max: 1001, taxa: 0.058, parcela: 42.86 },
  { min: 1001, max: 1393, taxa: 0.079, parcela: 42.86 },
  { min: 1393, max: 1900, taxa: 0.107, parcela: 42.86 },
  { min: 1900, max: 2801, taxa: 0.156, parcela: 42.86 },
  { min: 2801, max: 3423, taxa: 0.179, parcela: 42.86 },
  { min: 3423, max: 4099, taxa: 0.197, parcela: 42.86 },
  { min: 4099, max: 5800, taxa: 0.235, parcela: 42.86 },
  { min: 5800, max: 6422, taxa: 0.247, parcela: 42.86 },
  { min: 6422, max: 20064.21, taxa: 0.368, parcela: 42.86 },
];

//Não casado ou casado dois titulares sem dependentes - Deficiente
const tableFour = [
  { min: 0, max: 1519.41, taxa: 0, parcela: 0 },
  { min: 1519.41, max: 1648.29, taxa: 0.01, parcela: 0 },
  { min: 1648.29, max: 1994.61, taxa: 0.048, parcela: 0 },
  { min: 1994.61, max: 2410.71, taxa: 0.097, parcela: 0 },
  { min: 2410.71, max: 4373.75, taxa: 0.219, parcela: 0 },
  { min: 4373.75, max: 6621.18, taxa: 0.281, parcela: 0 },
  { min: 6621.18, max: 6717.41, taxa: 0.283, parcela: 0 },
  { min: 6717.41, max: 20264.85, taxa: 0.394, parcela: 0 },
];

//Não casado, com um ou mais dependentes - Deficiente

const tableFive = [
  { min: 0, max: 1677.09, taxa: 0, parcela: 0 },
  { min: 1677.09, max: 1994.61, taxa: 0.015, parcela: 42.86 },
  { min: 1994.61, max: 2410.71, taxa: 0.069, parcela: 42.86 },
  { min: 2410.71, max: 4373.75, taxa: 0.204, parcela: 42.86 },
  { min: 4373.75, max: 6621.18, taxa: 0.271, parcela: 42.86 },
  { min: 6621.18, max: 6717.41, taxa: 0.273, parcela: 42.86 },
  { min: 6717.41, max: 20264.85, taxa: 0.391, parcela: 42.86 },
];

//Casado dois titulares, com um ou mais dependentes - Deficiente
const tableSix = [
  { min: 0, max: 1574.66, taxa: 0, parcela: 0 },
  { min: 1574.66, max: 1648.29, taxa: 0, parcela: 21.43 },
  { min: 1648.29, max: 1994.61, taxa: 0.034, parcela: 21.43 },
  { min: 1994.61, max: 2410.71, taxa: 0.085, parcela: 21.43 },
  { min: 2410.71, max: 4373.75, taxa: 0.213, parcela: 21.43 },
  { min: 4373.75, max: 6621.18, taxa: 0.276, parcela: 21.43 },
  { min: 6621.18, max: 6717.41, taxa: 0.279, parcela: 21.43 },
  { min: 6717.41, max: 20264.85, taxa: 0.393, parcela: 21.43 },
];

//Casado único titular - Deficiente
const tableSeven = [
  { min: 0, max: 2105.51, taxa: 0, parcela: 0 },
  { min: 2105.51, max: 3622.95, taxa: 0.117, parcela: 42.86 },
  { min: 3622.95, max: 6587.01, taxa: 0.213, parcela: 42.86 },
  { min: 6587.01, max: 20264.85, taxa: 0.356, parcela: 42.86 },
]

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

    if (value.length > maxLength) {
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
  //const taxBracket = taxdata.find(
  //  (item) => vencBruto > item.min && vencBruto <= item.max
  //);
  //const irs = taxBracket ? vencBruto * taxBracket.taxa : 0;

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
