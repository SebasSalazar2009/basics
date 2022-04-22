const fah = 100
const cel = 37

function convertTemp (temp1) {
    const returnTemp = (temp1 - 32) * 5 / 9
    return ((temp1 - 32) * 5 / 9).toFixed(0)
}

const res = convertTemp (fah)
console.log('100 in fahrenheit is', res, "in celsius");

function convertTemp2 (temp1) {
const returntemp2 = (temp1 - 32) * 5 / 9 + 273.15
return ((temp1 - 32) * 5 / 9 + 273.15).toFixed(0)

}

const res2 = convertTemp2(fah)
console.log('100 in fahrenheit is', res2, 'in kevin');

function convertTemp3 (temp3){
    const returnTemp3 = ((temp3 * 9 / 5) + 32)
    return ((temp3 * 9 / 5) + 32)
}

const res3 = convertTemp3(cel)
console.log(' 37 degrees in celsius is ', res3, "in fahreheit")
