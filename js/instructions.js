function jump(value) {
  op.value = `0`;
  oi.value = value;
  ir.value = `0${value}`;
  ra.value = ic.value;
  ic.value = `0${value}`;
  mdr.value = `0${value}`;
  learningRegisterSetup();
}

function jumpZero(value) {
  if (ac.value === "000") {
    op.value = `1`;
    oi.value = value;
    ir.value = `1${value}`;
    ra.value = ic.value;
    ic.value = `0${value}`;
    mdr.value = `1${value}`;
  } else {
    op.value = `1`;
    oi.value = value;
    mdr.value = `1${value}`;
    ir.value = `1${value}`;
    ra.value = ic.value;
    ic.value = `0${getNextSlot(ic.value)}`;
  }
  learningRegisterSetup();
}

function jumpNotZero(value) {
  if (ac.value !== "000") {
    op.value = `2`;
    oi.value = value;
    ir.value = `2${value}`;
    ra.value = ic.value;
    ic.value = `0${value}`;
    mdr.value = `2${value}`;
  } else {
    op.value = `2`;
    oi.value = value;
    mdr.value = `2${value}`;
    ir.value = `2${value}`;
    ra.value = ic.value;
    ic.value = `0${getNextSlot(ic.value)}`;
  }
  learningRegisterSetup();
}

function loadValue(value) {
  ac.value = value;
  op.value = `3`;
  oi.value = value;
  ir.value = `3${value}`;
  ra.value = ic.value;
  ic.value = `0${getNextSlot(ic.value)}`;
  mdr.value = `3${value}`;
  learningRegisterSetup();
}

function add(value) {
  let adder = document.getElementById(`num${value.substring(0, 3)}`);
  let newAC = hexToDec(ac.value);
  adder = adder.innerHTML;
  adder = hexToDec(adder);
  newAC = adder + newAC;
  newAC = decToHex(newAC);
  ac.value = newAC;
  ra.value = ic.value;
  mdr.value = `4${value}`;
  ir.value = `4${value}`;
  op.value = `4`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  learningRegisterSetup();
}

function sub(value) {
  let subtractor = document.getElementById(`num${value.substring(0, 3)}`);
  let newAC = hexToDec(ac.value);
  subtractor = subtractor.innerHTML;
  subtractor = hexToDec(subtractor);
  newAC = newAC - subtractor;
  newAC = decToHex(newAC);
  ac.value = newAC;
  ra.value = ic.value;
  mdr.value = `5${value}`;
  ir.value = `5${value}`;
  op.value = `5`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  learningRegisterSetup();
}

function mul(value) {
  let multiplier = document.getElementById(`num${value.substring(0, 3)}`);
  let newAC = hexToDec(ac.value);
  multiplier = multiplier.innerHTML;
  multiplier = hexToDec(multiplier);
  newAC = newAC * multiplier;
  newAC = decToHex(newAC);
  ac.value = newAC;
  ra.value = ic.value;
  mdr.value = `6${value}`;
  ir.value = `6${value}`;
  op.value = `6`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  learningRegisterSetup();
}

function div(value) {
  let divisor = document.getElementById(`num${value.substring(0, 3)}`);
  let newAC = hexToDec(ac.value);
  divisor = divisor.innerHTML;
  divisor = hexToDec(divisor);
  newAC = Math.floor(newAC / divisor);
  newAC = decToHex(newAC);
  ac.value = newAC;
  ra.value = ic.value;
  mdr.value = `7${value}`;
  ir.value = `7${value}`;
  op.value = `7`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  learningRegisterSetup();
}

function load(value) {
  let newAC = document.getElementById(`num${value.substring(0, 3)}`);
  newAC = newAC.innerHTML;
  ra.value = ic.value;
  ac.value = newAC;
  mdr.value = `8${value}`;
  ir.value = `8${value}`;
  op.value = `8`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  learningRegisterSetup();
}

function stor(value) {
  let codeStorSlot = document.getElementById(value.substring(0, 3));
  let assemblyStorSlot = document.getElementById(`num${value.substring(0, 3)}`);
  codeStorSlot.value = ac.value;
  assemblyStorSlot.innerHTML = ac.value;

  ra.value = ic.value;
  mdr.value = `9${value}`;
  ir.value = `9${value}`;
  op.value = `9`;
  oi.value = value;
  ic.value = `0${getNextSlot(ic.value)}`;
  mar.value = `0${value}`;
  learningRegisterSetup();
}

function sc(value) {
  op.value = `A`;
  oi.value = value;
  ir.value = `A${value}`;
  ra.value = ic.value;
  ic.value = `0${value}`;
  mdr.value = `A${value}`;
  stack.push(getNextSlot(ra.value));
  learningRegisterSetup();
}

function rc(value) {
  op.value = `B`;
  oi.value = "000";
  ir.value = `B000`;
  ra.value = ic.value;
  ic.value = `0${stack[stack.length - 1]}`;
  mdr.value = `B${value}`;
  stack.pop();
  learningRegisterSetup();
}

function end() {
  op.value = `C`;
  oi.value = "000";
  ir.value = `C000`;
  ra.value = ic.value;
  mdr.value = `C000`;
  learningRegisterSetup();
}

function inPrompt() {
  let inAlertInput = window.prompt("Entre com um valor (hexadecimal)");
  if (inAlertInput.length === 3) {
    inAlertInput = `0${inAlertInput}`;
  } else if (inAlertInput.length === 2) {
    inAlertInput = `00${inAlertInput}`;
  } else if (inAlertInput.length === 1) {
    inAlertInput = `000${inAlertInput}`;
  } else if (inAlertInput.length > 4 || inAlertInput.length < 1) {
    alert("erro");
    return;
  }
  inAlertInput = inAlertInput.toUpperCase();
  ac.value = inAlertInput;
  op.value = `D`;
  oi.value = "000";
  ir.value = `D000`;
  ra.value = ic.value;
  ic.value = `0${getNextSlot(ic.value)}`;
  mdr.value = `D000`;
  learningRegisterSetup();
}

function outAlert() {
  alert(`${ac.value}`);
  ra.value = ic.value;
  ic.value = `0${getNextSlot(ic.value)}`;
  op.value = `E`;
  mdr.value = "E000";
  ir.value = "E000";
  learningRegisterSetup();
}

function nop() {
  op.value = `F`;
  oi.value = "000";
  ir.value = `F000`;
  ra.value = ic.value;
  ic.value = `0${getNextSlot(ic.value)}`;
  mdr.value = `F000`;
  learningRegisterSetup();
}

function getNextSlot(hex) {
  return decToHex(hexToDec(hex) + 2);
}
function resetProgram() {
  cycle = 0;
  registersSetup();
}
