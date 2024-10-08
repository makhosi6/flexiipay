const formHTML = document.querySelector('#waitlist-form') || document.querySelector('form');
const snackbarHTML = document.getElementById("snackbar");
const SNACKBAR_TIMEOUT = 3500;

formHTML.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity()) {
        const formData = new FormData(form);
        const email = formData.get('email');
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('platform') || 'unknown';
        const message = "English: Under construction notification";
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            name,
            email,
            message,
        });

        const opts = {
            method: "POST", headers,
            body,
            redirect: "follow"
        };
        fetch("https://byteestudio.com/api/send-contact-info", opts)
            .then(response => {

                if (response.status > 399 && response.status != 429) {
                    throw new Error(response.statusText + ' Try again later.');
                }

                return response.text()
            })
            .then(data => {
                snackbarHTML.innerText = "Success! Thanks for submitting";
                snackbarHTML.classList.add('show')
                snackbarHTML.classList.add('btn-warning')

                setTimeout(function () {
                    snackbarHTML.classList.remove('btn-warning')
                    snackbarHTML.classList.remove('show')
                }, SNACKBAR_TIMEOUT);
                formHTML.reset();
                console.log('Success:', data);
            })
            .catch(error => {
                snackbarHTML.innerText = 'Error: ' + error.toString();
                snackbarHTML.classList.add('show')
                snackbarHTML.classList.add('btn-secondary')

                setTimeout(function () {
                    snackbarHTML.classList.remove('btn-secondary')
                    snackbarHTML.classList.remove('show')
                }, SNACKBAR_TIMEOUT);
                console.error('Error:', error);
            });
    } else {
        snackbarHTML.innerText = "Please fill out all required fields."
        snackbarHTML.classList.add('show')
        snackbarHTML.classList.add('btn-secondary')

        setTimeout(function () {
            snackbarHTML.classList.remove('btn-secondary')
            snackbarHTML.classList.remove('show')
        }, SNACKBAR_TIMEOUT);
    }
});