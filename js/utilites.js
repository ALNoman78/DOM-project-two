//  create a function which is convert input value to a number

function getInputFieldById(id){
    const inputField = document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}