//  step - 1

document.getElementById('cash-out-click').addEventListener('click', function(){
    const cashOut = document.getElementById('show-cashout')
    cashOut.classList.remove('hidden');

    const showAddAmount = document.getElementById('add-your-account');
    showAddAmount.classList.add('hidden')
})

document.getElementById('show-add-money').addEventListener('click', function(){

    const showAddMoney = document.getElementById('show-cashout')
    showAddMoney.classList.add('hidden')

    const hideCashOutBtn = document.getElementById('add-your-account');
    hideCashOutBtn.classList.remove('hidden')
})