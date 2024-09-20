document.getElementById('submit-cashOut').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount =  getInputFieldById('cashOut-amount');
    const pinNumber = getInputFieldById('cashOut-password');

    if (pinNumber === 1234) {
        const availableBalance = getTextInputToNumber('balance');
        const cashOutBalance = availableBalance - cashOutAmount;
        if(cashOutAmount > availableBalance){
            alert('Transaction Failed');
            return;
        }
        alert('Cashout successful');
        document.getElementById('balance').innerText = cashOutBalance

        const div = document.createElement('div')
        div.innerHTML = `
            <div class = "bg-red-600 p-3 rounded-xl text-white">
                <h1> Cash out :</h1>
                <p> Cashout Balance ${cashOutAmount} tk. after cash out balance ${cashOutBalance}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Invalid Input !')
    }
})