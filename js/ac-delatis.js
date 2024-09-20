// step - 1 btn select

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('amount-of-money').value;
    // console.log(accountNumber);

    const moneyAmount = document.getElementById('amount').value;
    const moneyNumber = parseFloat(moneyAmount)
    console.log(moneyNumber);

    const pinNumber = document.getElementById('pin-number').value

    if (pinNumber === '123') {
        alert("Money Added Successfully");

        const availableBalance = document.getElementById('balance').innerText
        const balanceNumber = parseFloat(availableBalance)
        console.log(balanceNumber);

        const updateBalance = balanceNumber + moneyNumber
        console.log(updateBalance);

        document.getElementById('balance').innerText = updateBalance
    }else{
        alert('Error ! input your valid information')
    }
})