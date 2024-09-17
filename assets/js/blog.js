const themeSwitcher = document.getElementById("theme");
const grabber = JSON.parse(localStorage.getItem("post"));
const blogElement = document.getElementById("blogOutput");

// darkmode 
themeSwitcher.addEventListener("click", function(){
    console.log(themeSwitcher.value)
    if (themeSwitcher.value === "dark") {
        themeSwitcher.value = "light"
       document.querySelector("body").classList.add("light")
       document.querySelector("body").classList.remove("dark")
    } else{
        themeSwitcher.value = "dark"
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
    }
})

// Grab data stored in localstorage and append it for the blog post formats
for (let i = 0; i < grabber.length; i++){
let blogPost = document.createElement("p")
blogPost.textContent = grabber[i].content
let blogTitle = document.createElement("p")
blogTitle.textContent = grabber[i].title
let blogUser = document.createElement("p")
blogUser.textContent = grabber[i].userName

blogElement.appendChild(blogUser);
blogElement.appendChild(blogTitle);
blogElement.appendChild(blogPost);
}