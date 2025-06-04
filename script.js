const modeButton = document.getElementById("theme-btn");
const bodyElement = document.getElementById("main");

modeButton.addEventListener("click", function(){
    bodyElement.classList.toggle("dark-mode")
})