get_form_data = () => {
    const user = USER.value;
    const title = TITLE.value;
    const content = CONTENT.value;

    return {
        user: user,
        title: title,
        content: content
    }
}

clear_form = () => {
    USER.value = "";
    TITLE.value = "";
    CONTENT.value = "";
}

fetch_all_data = () => {
    BLOGS_CONTAINER.innerHTML = "";

    fetch(FIREBASE_GET_URL)
        .then(response => response.json())
        .then(response => {
            // response.body.sort((a, b) =>( a.data.date - b.data.date) && );

            response.body.forEach(blog => {
                new Blog(blog.data);
            });
        })
        .catch(console.log);
}