const themeSwitcher = document.getElementById("theme");

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