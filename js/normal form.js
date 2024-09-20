// add money form function added

document.getElementById('add-money').addEventListener('click',  function (event){
    event.preventDefault();

    const amountOfMoney = getInputFieldById('amount-of-money');
    const pinNumber = getInputFieldById('pin-number');

    if (pinNumber === 1234) {
        console.log('successful');

        const availableBalance = getTextInputToNumber('balance');
        const afterAddAmount = availableBalance + amountOfMoney;
        document.getElementById('balance').innerText = afterAddAmount;
    }else{
        alert('Invalid Data ! Check Your account number and pin number')
    }
})