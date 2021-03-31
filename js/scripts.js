((d) => {
    const $form = d.getElementById('form');
    const $email = $form.querySelector('.main__form-input');
    
    const REGEXP = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    const messages = {
        empty: 'Whoops! It looks like you forgot to add your email',
        invalid: 'Please provide a valid email address'
    }

    const validateEmail = (email, regExp) => regExp.test(email);

    $form.addEventListener('submit', (e) => {

        if (!validateEmail($email.value, REGEXP)) {
            e.preventDefault();
            let message = $email.value === '' ? messages.empty : messages.invalid;
            $form.style = `--message: '${message}';`
            $email.parentElement.classList.add('main__form-email--invalid');
        }
    });

    $email.addEventListener('focus', () => {
        $email.parentElement.classList.remove('main__form-email--invalid');
    });
})(document);