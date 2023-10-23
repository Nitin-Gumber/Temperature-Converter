    "use strict"   

    const calculateTemp = () => {

    const numberTemp = document.getElementById("temp").value;
    const tempSelected = document.getElementById("temp_diff");

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    console.log(valueTemp);
    const celToFah = (cel) => {
        let celsius = Math.round((cel * 9/5) + 32);
        return celsius;
    }
    const fahToCel = (fehr) => {
        let fahrenheit = Math.round((fehr - 32) * 5/9);
        return fahrenheit;
    }

    let result;
    if (valueTemp === 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Celsius`;
    }
}
