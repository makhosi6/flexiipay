const formHTML = document.querySelector('#waitlist-form') || document.querySelector('form');;
formHTML.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity()) {
        const formData = new FormData(form);

        fetch("https://byteestudio.com/api/send-contact-info", {
            "headers": {
                "accept": "*/*",
                "content-type": "application/json",
            },
            "referrer": "https://www.flexiipay.com",
            "body": formData,
            "method": "POST",
            "mode": "no-cors",
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Please fill out all required fields.');
    }
});
