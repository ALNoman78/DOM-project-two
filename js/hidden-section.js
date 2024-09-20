document.getElementById('show-add-money').addEventListener('click',  function(){
    showItems('add-your-account');
})

document.getElementById('cash-out-click').addEventListener('click', function(){
    showItems('show-cash-out');
})

document.getElementById('transfer-section').addEventListener('click', function(){
    showItems('show-transfer')
})

document.getElementById('bonus-section').addEventListener('click', function(){
    showItems('show-bonus')
})

document.getElementById('pay-bill-section').addEventListener('click', function(){
    showItems('show-pay-bill');
})

document.getElementById('transaction-section').addEventListener('click', function(){
    showItems('show-transaction')
})