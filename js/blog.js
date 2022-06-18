class Blog{
    constructor(data){
        this.data = data;
        console.log(data);

        this.blog = this.create_blog();
    }

    create_blog(){
        const blog = document.createElement("div");
        blog.className = "blog";

        const title = document.createElement("h3");
        title.className = "title";
        title.innerText = this.data.title;

        const hr = document.createElement("hr");

        const content = document.createElement("p");
        content.className = "content";
        content.innerText = this.data.content;

        const information = document.createElement("div");
        information.className = "information row";

        const author = document.createElement("span");
        author.className = "author";
        author.innerText = "- " + this.data.user;

        const date = document.createElement("span");
        date.className = "date";
        date.innerText = this.data.date;

        information.appendChild(author);
        information.appendChild(date);

        blog.appendChild(title);
        blog.appendChild(hr);
        blog.appendChild(content);
        blog.appendChild(information);

        BLOGS_CONTAINER.appendChild(blog);
    }
}