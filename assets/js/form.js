const button = document.getElementById("submitBtn");
const themeSwitcher = document.getElementById("theme");

// prevent defualt, post the username, title of blog & content into local storage.
button.addEventListener("click", function(event){
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    console.log(event);
    let post = JSON.parse(localStorage.getItem("post"))||[];
    let blogPost = {
        userName,
        title,
        content
    }
post.push(blogPost)
localStorage.setItem("post",JSON.stringify(post));
window.location.replace("/blog.html");
});

