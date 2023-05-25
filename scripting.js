//variables
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

        form.addEventListener('submit', function(afternoon) {
            afternoon.preventDefault();

            afternoonhere()
        })

//set error codes here
        const setError = function (element, message) {
            const input = element.parentElement
            const display = input.querySelector('.error');

                    display.innerText = message;
                    input.classList.add('error');
                    input.classList.remove('success');
        }

//set success codes here
        const setSuccess = function (element) {
            const input = element.parentElement
            const display = input.querySelector('.error');

                    display.innerText = '';
                    input.classList.add('success');
                    input.classList.remove('error');
        }

//form's codes here
            const afternoonhere = function () {
                const usernameValue = username.value.trim();
                const emailValue = email.value.trim();
                const passwordValue = password.value.trim();
                const password2Value = password2.value.trim();

                    if(usernameValue == '') {
                        setError(username, 'Username cannot be blank')
                    }
                    else if(usernameValue.length <= 5) {
                        setError(username, 'Username character should be at least 8 characters')
                    }
                    else {
                        setSuccess(username)
                    }

                    if(emailValue == '') {
                        setError(email, 'Email cannot be blank')
                    }
                    else {
                        setSuccess(email)
                    }

                    if(passwordValue == '') {
                        setError(password, 'Password cannot be blank')
                    }
                    else if(passwordValue.length <= 5) {
                        setError(password, 'Password character should be at least 8 characters')
                    }
                    else {
                        setSuccess(password)
                    }

                    if(password2Value == '') {
                        setError(password2, 'Password cannot be blank')
                    }
                    else if(password2Value !== passwordValue) {
                        setError(password2, "Password doesn't match")
                    }
                    else {
                        setSuccess(password2)
                    }
            }