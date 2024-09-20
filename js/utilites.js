//  create a function which is convert input value to a number


// input field to number convert

function getInputFieldById(id){
    const inputField = document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}

//  text field to number in text

function getTextInputToNumber (id){
    const getTextField = document.getElementById(id).innerText;
    const textToNumber = parseFloat(getTextField);
    return textToNumber;
}