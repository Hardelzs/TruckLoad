const btn =document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const sunIcon =document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')


const userTheme =localStorage.getItem('theme')
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

const iconToggle = () => {
    sunIcon.classList.toggle("display-none")
    moonIcon.classList.toggle("display-none")
}

const themeCheck = () => {
    if(userTheme === "dark" ||(!userTheme && systemTheme)){
        document.documentElement.classList.add("dark")
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none")
}

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light")
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light")
}

sunIcon.addEventListener("click",() => {
    themeSwitch()
})

moonIcon.addEventListener("click", () => {
    themeSwitch()
})

themeCheck()


