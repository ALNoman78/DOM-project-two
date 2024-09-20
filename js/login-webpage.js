//  step - 1 (i have to reached out the submit button first)

document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    
    // step - 2
    // i have enter there user id ans password

    const userId = document.getElementById('input-user').value;
    console.log(userId);

    const passwordUnique = document.getElementById('password-id').value;
    console.log(passwordUnique);

    if (userId === '123' && passwordUnique === '123') {
        console.log('Login Successful');
    }else{
        alert('Invalid Information ! Check you user id or password')
    }
})

document.getElementById('login-button').addEventListener('click', function(){
    window.location.href = './ac-cashOut.html'
})