CLEAR_BTN.addEventListener("click", () => {
    clear_form();
});

POST_BTN.addEventListener("click", () => {
    const data = get_form_data();

    fetch(FIREBASE_POST_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json())
        .then(()=>{
            clear_form();
            fetch_all_data();
        })
        .catch(console.log);
});

REFRESH_BTN.addEventListener("click", () => {
    fetch_all_data();
});