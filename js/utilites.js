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
//  hidden section in home page

function showItems (id){
    document.getElementById('add-your-account').classList.add('hidden')
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('show-transfer').classList.add('hidden');
    document.getElementById('show-bonus').classList.add('hidden');
    document.getElementById('show-transaction').classList.add('hidden');
    document.getElementById('show-pay-bill').classList.add('hidden')
    // when i clicked id it will be showed

    document.getElementById(id).classList.remove('hidden');
}