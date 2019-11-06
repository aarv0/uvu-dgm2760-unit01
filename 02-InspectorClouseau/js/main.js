document.querySelector(`header > h1`).innerText = "Inspector Clouseau"
document.querySelector(`header > h2`).innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`

let offset = `Window offset is ${window.screenX} from the left edge and ${window.ScreenY} pixels from the top of the display.`

let myWindow = document.querySelector(`#myWindow`).innerText = `${windowSizes} \n ${offset}`





let urlText = document.getElementById("urlText").innerHTML = "The page URL is: " + window.location.href;




}
reDisplay()


function url() {
var x = document.querySelector(`#myDoc`).innerText = "The document title is: " + document.title
}

let documentTitle = document.querySelector(`#myDoc`).innerText = "The document title is: " + document.title


let oLastModif = new Date(document.lastModified);

let myDocument = document.querySelector(`#myDocument`).innerText = "This document was last updated: " + `${oLastModif}`

 






