const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('inputEmail4').value;
    const password = document.getElementById('inputPassword4').value;
    const address = document.getElementById('inputAddress').value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;
    const zip = document.getElementById('inputZip').value;

    let signupData = {
        email: email,
        password: password,
        address: address,
        city: city,
        state: state,
        zip: zip
    };

    console.log('User Signup Data:', signupData);
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(signupData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    signupForm.reset();
});