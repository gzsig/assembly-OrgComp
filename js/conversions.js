function handelHexToDec(hex){
  let res = hexToDec(hex)
  let ansPlace = document.getElementById('hex-to-dec-res')
  ansPlace.innerHTML = res
}


function handelDecToHex(dec){
  let res = decToHex(dec)
  let ansPlace = document.getElementById('dec-to-hex-res')
  ansPlace.innerHTML = res
}