document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("button clicked");

    const inputUserId = getInputFieldById('input-user');
    const passwordUser = getInputFieldById('password-id');

    if (passwordUser === 1234 && inputUserId === 123) {
        console.log('login successful');
        window.location.href = './ac-cashOut.html'
    }else{
        alert('Incorrect Details ! check your user id or password')
    }
})