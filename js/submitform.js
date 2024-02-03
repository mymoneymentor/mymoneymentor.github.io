const form = document.getElementById('contactUsForm');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(form);
    let payload =
    {
        "phone_number": data.get('phone'),
        "name": data.get('name'),
        "is_existing_credit_card_user": data.get('anyCCholder'),
        "occupation": data.get('occupation'),
        "message": data.get('message')
    }
    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8"},
        body : JSON.stringify(payload),
        method : "POST",
        mode : "no-cors"
    };


    try {
        const res = await fetch(
            'https://contactapi.mymoneymentor.co/marketing/contactus',
            {
                method: 'POST',
                body: JSON.stringify(payload),
            },
        );

        const resData = await res.json();

        console.log(resData);
        alert('You request has been submitted successfully.')
        window.location.href = "https://mymoneymentor.co/contact.html";


    } catch (err) {
        console.log(err.message);
        alert('You request has been submitted successfully.')
        window.location.href = "https://mymoneymentor.co/contact.html";
    }
});
