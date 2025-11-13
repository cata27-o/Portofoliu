// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")




// Add event list
button.addEventListener("click" , altaViata)
an.addEventListener("mouseover" , displayAge)

const d = new Date()
var year = d.getFullYear()


//Define function
function displayAge(){
an.innerHTML = year - an.innerHTML
}
function altaViata() {

nume.innerHTML = "Lautar"
prenume.innerHTML = "SAX_MUSIC_ORCHESTRA"

educatie.innerHTML = "educatie"
asteptari.innerHTML = "<ul><li>Workshops</li><li>Intership</li></ul>"

img.src = "images/X6.jpg"
img.style.opacity = "70%"
img.style.height = "300px"
img.style.width = "400px"
img.style.border = "3px solid black"

body.style.backgroundColor ="gold"

}