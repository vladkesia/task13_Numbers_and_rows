const firstInput = prompt('Введіть перший рядок ')
const secondInput = prompt('Введіть другий рядок ')
const thirdInput = prompt('Введіть третій рядок ')


if(firstInput !== null && secondInput !== null && thirdInput !== null) {
    const result = [firstInput,secondInput,thirdInput]
    let userString = ''
    for (let i = 0; i<result.length; i++){
        userString += result[i] + ' '
    }
    alert(userString)
}else {
    alert('Нажаль відмінили одну або декілька дій')
}

const number = 12345
if (number>9999 && number<100000) {
    const string = String(number)
    const arr = string.split('')
    let stringResult = ''
    for (let i = 0; i < arr.length; i++) {
        stringResult = arr.join(' ')
    }
    console.log(stringResult)
}else {
    console.log('Вибачте але ваше число мае бути 5ти значним')
}
