window.onload = () => {
  createSlots();
  registersSetup();
  learningRegisterSetup();
  typeWriter("Check out an example just start coding :)");
};

function createSlots() {
  let memorySlots = document.getElementById("memory-slots");
  for (let i = 0; i < 4096; i += 2) {
    let tempLabel = document.createElement("label");
    let tempInput = document.createElement("input");
    let tempInputAsNumber = document.createElement("span");
    let newLine = document.createElement("div");
    let iHex = decToHex(i);
    tempLabel.setAttribute("for", iHex);
    tempLabel.setAttribute("class", "slot-label");
    tempLabel.innerHTML = `0x${iHex}`;
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("id", iHex);
    tempInput.setAttribute("class", "slots-input");
    tempInput.onblur = event => {
      codeToAssembly(event.target.id);
    };
    tempInputAsNumber.setAttribute("id", `num${iHex}`);
    tempInputAsNumber.setAttribute("class", "assembly-code");
    tempInputAsNumber.setAttribute("class", "input-as-assembly");
    newLine.setAttribute("class", "slots");
    newLine.appendChild(tempLabel);
    newLine.appendChild(tempInput);
    newLine.appendChild(tempInputAsNumber);
    memorySlots.appendChild(newLine);
  }
}

let ac = document.getElementById("ac"); //Acumulador
let op = document.getElementById("op"); //Registrador de código de operação
let oi = document.getElementById("oi"); //Registrador de operando de instrução
let ir = document.getElementById("ir"); //Registrador de instrução
let ic = document.getElementById("ic"); // Registrador de endereço da próxima instrução
let mdr = document.getElementById("mdr"); // Registrador de dados da memória
let mar = document.getElementById("mar");
let ra = document.getElementById("ra"); //Registrador de endereço de retorno
let stack = [];

function registersSetup() {
  ac.value = decToHex(Math.floor(Math.random() * (65535 - 4096) + 4096));
  ic.value = "0000";
  op.value = "";
  oi.value = "";
  ir.value = "";
  mdr.value = "";
  mar.value = "";
  ra.value = "";
  stack = [];
}

function learningRegisterSetup() {
  let list = document.getElementById("learn-register-items");
  list.innerHTML = `<li>Lendo do espaço <span class="learning-value">0x${ra.value.substring(1,4)}</span> de memoria</li>
  <li>Proximo espaço de memoria: <span class="learning-value"> 0x${ic.value.substring(1,4)}</span></li>
  <li>Lendo <span class="learning-value"> ${mdr.value}</span> da memoria</li>
  <li>escrevendo no espaco xxxx de memoria: <span class="learning-value"> ${mar.value}</span></li>
  <li>Codigo em assembly <span class="learning-value"> ${ir.value}</span></li>
  <li>operação: <span class="learning-value"> ${op.value}</span></li>
  <li>Valor: <span class="learning-value"> ${oi.value}</span></li>
  <li>Acumulador: <span class="learning-value"> ${ac.value}</span></li>`;
}

function codeToAssembly(id) {
  let inputCode = document.getElementById(id).value.toUpperCase();
  document.getElementById(id).value = inputCode;
  let assemblyCode = document.getElementById(`num${id}`);

  if (inputCode.length === 4) {
    assemblyCode.innerHTML = inputCode;
  } else {
    let comand = inputCode.split(" ")[0];
    switch (comand) {
      case "":
        comand = " ";
        break;
      case "JMP":
        comand = "0";
        break;
      case "JZ":
        comand = "1";
        break;
      case "JNZ":
        comand = "2";
        break;
      case "LV":
        comand = "3";
        break;
      case "ADD":
        comand = "4";
        break;
      case "SUB":
        comand = "5";
        break;
      case "MUL":
        comand = "6";
        break;
      case "DIV":
        comand = "7";
        break;
      case "LOAD":
        comand = "8";
        break;
      case "STOR":
        comand = "9";
        break;
      case "SC":
        comand = "A";
        break;
      case "RS":
        comand = "B";
        break;
      case "END":
        comand = "C";
        break;
      case "IN":
        comand = "D";
        break;
      case "OUT":
        comand = "E";
        break;
      case "NOP":
        comand = "F";
        break;

      default:
        comand = "ERROR";
        break;
    }
    if (comand === "ERROR" || comand === " ") {
      assemblyCode.innerHTML = comand;
    } else if (
      comand === "B" ||
      comand === "C" ||
      comand === "D" ||
      comand === "E" ||
      comand === "F"
    ) {
      assemblyCode.innerHTML = comand + "000";
    } else assemblyCode.innerHTML = comand + inputCode.split(" ")[1];
  }
}

function decToHex(dec) {
  dec = dec.toString(16).toUpperCase();

  // return dec.length === 3 ? `${dec}` : `${"0".repeat(3 - dec.length)+dec}`;

  if (dec.length >= 3) {
    return dec;
  }
  if (dec.length === 2) {
    return `0${dec}`;
  }
  if (dec.length === 1) {
    return `00${dec}`;
  }
}

function hexToDec(hex) {
  return hex
    .toLowerCase()
    .split("")
    .reduce((result, ch) => result * 16 + "0123456789abcdef".indexOf(ch), 0);
}
