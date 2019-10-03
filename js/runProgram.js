function executeCommand(code) {
  if (code.innerHTML.trim() == "") {
    return;
  }
  code.parentNode.classList.add("active-slot");
  setTimeout(() => {
    code.parentNode.classList.remove("active-slot");
  }, 500);
  let comand = code.innerHTML[0];
  let value = code.innerHTML.substring(1, 4);
  switch (comand) {
    // JMP
    case "0":
      jump(value);
      break;
    // JZ
    case "1":
      jumpZero(value);
      break;
    // JNZ
    case "2":
      jumpNotZero(value);
      break;
    // LV
    case "3":
      loadValue(value);
      break;
    // ADD
    case "4":
      add(value);
      break;
    // SUB
    case "5":
      sub(value);
      break;
    // MUL
    case "6":
      mul(value);
      break;
    // DIV
    case "7":
      div(value);
      break;
    // LOAD
    case "8":
      load(value);
      break;
    // STOR
    case "9":
      stor(value);
      break;
    // SC
    case "A":
      sc(value);
      break;
    // RC
    case "B":
      rc(value);
      break;
    // END
    case "C":
      end();
      break;
    // IN
    case "D":
      inPrompt();
      break;
    // OUT
    case "E":
      outAlert();
      break;
    // NOP
    case "F":
      nop();
      break;
  }
}

let cycle = 0;
function runDebugger() {
  if (cycle === 0) {
    ra.value = "0000";
    executeCommand(document.getElementById("num000"));
    cycle++;
  } else {
    let nextCommand = document.getElementById(`num${ic.value.substring(1, 4)}`);
    cycle++;
    executeCommand(nextCommand);
  }
}

function runAssembly() {
  let intervalId = setInterval(() => {
    if (cycle === 0) {
      ra.value = "0000";
      executeCommand(document.getElementById("num000"));
      cycle++;
    } else {
      let nextCommand = document.getElementById(
        `num${ic.value.substring(1, 4)}`
      );
        if(nextCommand.innerHTML[0] === "C"){clearInterval(intervalId)}
      cycle++;
      executeCommand(nextCommand);
    }
  }, 1000);
}
