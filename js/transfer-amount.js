document.getElementById('submit-transfer').addEventListener('click', function(event){
    event.preventDefault();

    const transferAmount = getInputFieldById('transfer-amount');
    const transferPinNumber =  getInputFieldById('transfer-password');
    
    if (transferPinNumber === 1234) {
        const availableBalance = getTextInputToNumber('balance')
        const afterTransferAmount = availableBalance - transferAmount;
        if (transferAmount > availableBalance) {
            alert('Fund Transfer Unsuccessful');
            return;
        }
        alert('successfully fund transfer');
        document.getElementById('balance').innerText = afterTransferAmount;

        const div = document.createElement('div');
        div.innerHTML = `
            <div class= "bg-red-400 p-3 rounded-xl">
                <h1> Transfer Amount : </h1>
                <p> Transfer fund ${transferAmount} tk. available balance ${afterTransferAmount} </p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)
    }
})