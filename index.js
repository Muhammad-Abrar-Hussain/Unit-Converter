/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEle = document.getElementById("inbtn")
let classcal = document.getElementsByClassName("output-show")
let btnEle = document.getElementById("conbtn")

//
btnEle.addEventListener("click", function(){ 
    let input = inputEle.value
    inputEle.value = ""
    feetMeterConverter(input)
    literGallonConverter(input)
    massPoundsConverter(input)
    
}
 )

function feetMeterConverter(input){
    let result= `<p> ${input} meters = ${(3.281*input).toFixed(3)} feets | 
    ${input} feets = ${(input/3.281).toFixed(3)} meters</p>`
    return classcal[0].innerHTML = result
}
function literGallonConverter(input){
    let result = `<p> ${input} liters = ${(0.264*input).toFixed(3)} gallons | 
    ${input} gallons = ${(input/0.264).toFixed(3)} liters </p>`
    return classcal[1].innerHTML = result

}
function massPoundsConverter(input){
    let result = `<p> ${input} Kilogram = ${(2.204*input).toFixed(3)} pounds | 
    ${input} pounds = ${(input/2.204).toFixed(3)} kilogram </p>`
    return classcal[2].innerHTML = result

}