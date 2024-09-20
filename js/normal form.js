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
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-green-400 p-3 rounded-xl">
                <h1>Add Balance : </h1>
                <p>Add money ${amountOfMoney} tk. and after added balance ${afterAddAmount} </p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Invalid Data ! Check Your account number and pin number')
    }
})