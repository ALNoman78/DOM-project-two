document.getElementById('submit-coupon-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const couponBalance =  document.getElementById('coupon-money').value;
    console.log("hello coupon", couponBalance);
    if (couponBalance === 'ADDCOUPON30%') {
        alert('Coupon added successfully');
        const availableBalance = getTextInputToNumber("balance");
        const afterUsingCoupon = availableBalance + 100;
        
        document.getElementById('balance').innerText = afterUsingCoupon;

        const div = document.createElement('div');
        div.innerHTML = `
            <div class = "bg-blue-400 p-3 rounded-xl">
                <h3>Transaction ID : </h3>
                <p>Add Balance ${couponBalance} tk. available balance = ${afterUsingCoupon}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('No coupon is available for you')
    }
})