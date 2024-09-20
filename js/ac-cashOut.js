// step - 1

document.getElementById('submit-cashOut').addEventListener('click', function(event){
    event.preventDefault();
    // console.log(23);
    // step - 2
    const amountOfMoney = document.getElementById('cashOut-amount').value;
    const amountNumber = parseFloat(amountOfMoney)
    console.log(amountNumber);
    // step -3
    const accountDetails = document.getElementById('available-money').value;
    console.log(accountDetails);
    //step - 4 (pin number)
    const passwordNumber = document.getElementById('password').value
    console.log(passwordNumber);
    //  check the password 
    if (passwordNumber === '123') {
        alert('Your Transaction successful')
        // step - 6
        const mainBalance = document.getElementById('balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);
        console.log(mainBalanceNumber);

        const afterCashOut = mainBalanceNumber - amountNumber
        console.log(afterCashOut);
        // show the balance amount of your account
        document.getElementById('balance').innerText = afterCashOut;
    }else{
        alert('Invalid Information ! check you information')
    }
})



