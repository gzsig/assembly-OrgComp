// save one number in 0x000 and one number in 0x002, add both numbers
function levelOne() {
  document.getElementById("000").value = "LOAD 00A";
  document.getElementById("num000").innerHTML = "800A";
  document.getElementById("002").value = "ADD 00C";
  document.getElementById("num002").innerHTML = "400C";
  document.getElementById("004").value = "STOR 00E";
  document.getElementById("num004").innerHTML = "900E";
  document.getElementById("006").value = "END";
  document.getElementById("num006").innerHTML = "C000";
  document.getElementById("00A").value = "0005";
  document.getElementById("num00A").innerHTML = "0005";
  document.getElementById("00C").value = "0006";
  document.getElementById("num00C").innerHTML = "0006";

}


function levelTwo() {
  typeWriter("Example program: at the end of runtime the acumulator should have the answer of the factorial of the value in 0x02A (!0x02A)")
  document.getElementById("000").value = "LOAD 02A";
  document.getElementById("num000").innerHTML = "802A";
  document.getElementById("002").value = "STOR 02C";
  document.getElementById("num002").innerHTML = "902C";
  document.getElementById("004").value = "STOR 02E";
  document.getElementById("num004").innerHTML = "902E";
  document.getElementById("006").value = "SUB 028";
  document.getElementById("num006").innerHTML = "5028";
  document.getElementById("008").value = "JZ 024";
  document.getElementById("num008").innerHTML = "1024";
  document.getElementById("00A").value = "STOR 02C";
  document.getElementById("num00A").innerHTML = "902C";
  document.getElementById("00C").value = "MUL 02E";
  document.getElementById("num00C").innerHTML = "602E";
  document.getElementById("00E").value = "STOR 02E";
  document.getElementById("num00E").innerHTML = "902E";
  document.getElementById("010").value = "LOAD 02C";
  document.getElementById("num010").innerHTML = "802C";
  document.getElementById("012").value = "JNZ 006";
  document.getElementById("num012").innerHTML = "2006";

  document.getElementById("024").value = "LOAD 02E";
  document.getElementById("num024").innerHTML = "802E";
  document.getElementById("026").value = "END";
  document.getElementById("num026").innerHTML = "C000";
  document.getElementById("028").value = "0001";
  document.getElementById("num028").innerHTML = "0001";
  document.getElementById("02A").value = "0005";
  document.getElementById("num02A").innerHTML = "0005";
}
