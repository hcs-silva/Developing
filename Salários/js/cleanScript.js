// *********************************************** Data ***********************************
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
  ];

  
//   ****************************** Element Selection *******************************

//Number inputs

const vencBase = document.querySelector("#base");
const numDependentes = document.querySelector("#dependentes");
const horasNoturnas = document.querySelector("#horas-noturnas-trabalhadas");
const valorAlim = document.querySelector("#diarioAlim");
const horasTrabalhadas = document.querySelector("#horas-semanais-trabalhadas");
const horas50 = document.querySelector("#horas50");
const horas75 = document.querySelector("#horas75");
const horas100 = document.querySelector("#horas100");
const comission = document.querySelector("#comission");
const faltas = document.querySelector("#faltas");

// Radio Input targetting

const deficiente = document.querySelector("#deficiencia");
const naoDeficiente = document.querySelector("#sem-deficiencia");
const porTurnos = document.querySelector("#por-turnos");
const semTurnos = document.querySelector("#sem-turnos");
const recebeSubAlim = document.querySelector("#recebe");
const naoRecebeSubAlim = document.querySelector("#nao-recebe");
const ticket = document.querySelector("#euroTicket");
const dinheiro = document.querySelector("#money");
const contratoFull = document.querySelector("#full-time");
const contratoPart = document.querySelector("#part-time");
const fezHoras = document.querySelector("#fez");
const naoFezHoras = document.querySelector("#nao-fez");
const radioBtnNo = document.querySelector("#nao-duodecimos");
const radioBtnYes = document.querySelector("#duodecimos");
const subsidioPagoFerias = document.querySelector("#pagoF");
const subsidioNaoPagoFerias = document.querySelector("#nao-pagoF");
const subsidioPagoNatal = document.querySelector("#pagoN");
const subsidioNaoPagoNatal = document.querySelector("#nao-pagoN");


//Household type selection (Radio Inputs)

const tabelaUm = document.querySelector("#tableOne");
const tabelaDois = document.querySelector("#tableTwo");
const tabelaTres = document.querySelector("#tableThree");
const tabelaQuatro = document.querySelector("#tableFour");
const tabelaCinco = document.querySelector("#tableFive");
const tabelaSeis = document.querySelector("#tableSix");
const tabelaSete = document.querySelector("#tableSeven");

//Page Selection

const pageOne = document.querySelector("#page-one");
const pageTwo = document.querySelector("#page-two");
const pageThree = document.querySelector("#page-three");

//Button Selection

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

// *********************************** Functions **************************************

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
    tipoAgregado.classList.add("hide");
    horasNoturnasBox.classList.add("hide");
    tipoPagamento.classList.add("hide");
    valorAlimBox.classList.add("hide");
    deficiente.checked = false;
    naoDeficiente.checked = false;
    deficienteBox.classList.add("hide");
    naoDeficienteBox.classList.add("hide");
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
//************************************* Events **************************************
calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    //Checks form validity
    if (form.checkValidity()) {
      if (!vencBase.value || !comission.value || !faltas.value) return;
      pageThree.classList.add("hide");
      result.classList.remove("hide");
      calcular();
    } else {
      //focuses to required field
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
  
  deficiente.addEventListener("change", () => {
    toggleDeficiencia();
  });
  
  naoDeficiente.addEventListener("change", () => {
    toggleDeficiencia();
  });
  