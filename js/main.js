
document.querySelector('#check').addEventListener('click', convert)


function convert() {
    let numberToConvert = document.querySelector('#input').value
    if (document.querySelector('#F').selected ==true) {
        document.querySelector('#placeToYell').innerText = ((numberToConvert - 32) * (5/9)).toFixed(2) + " Celcius"
    }
    if (document.querySelector('#C').selected == true) {
        document.querySelector('#placeToYell').innerText = ((numberToConvert * (9/5)) + 32).toFixed(2) + " Fahrenheit";
    }
}