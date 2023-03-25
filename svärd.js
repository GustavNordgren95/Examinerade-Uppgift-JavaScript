// Konstanter med svärdtyper och en funktion som skapar ett svärd med egenskaperna typ och bild
const eu = "europeiskt";
const jpn = "japanskt";
const fantasy = "fantasi";

function Svärd(typ, bild) {
    this.typ = typ;
    this.bild = bild;
}

// Lista på svärd objekt med bild och typ
let allaSvärd = [
    new Svärd(eu, "img/european/1.jpg"),
    new Svärd(eu, "img/european/2.jpg"),
    new Svärd(jpn, "img/japanese/1.jpg"),
    new Svärd(jpn, "img/japanese/2.jpg"),
    new Svärd(fantasy, "img/fantasy/1.jpg"),
    new Svärd(fantasy, "img/fantasy/2.jpg")
];

// Slumpar fram en bild på ett svärd
function slumpaSvärd() {
    let randomIndex = Math.floor(Math.random() * allaSvärd.length);
    let randomSvärd = allaSvärd[randomIndex];
    document.getElementById('svärdbild').src = randomSvärd.bild;
    return randomSvärd;
}

let nuvarandeSvärd = slumpaSvärd();

// Visar knappraden när musen är över bilden och gömmer den igen efter att musen har flyttats bort
// Event lades till svärdwrapper istället för själva bilden för att annars skulle knappraden ändras
// hela tiden när musen är i den rutan
const svärdbild = document.getElementById('svärdwrapper');
const knapprad = document.querySelector('.knapprad');

svärdbild.addEventListener('mouseover', () => {
    knapprad.classList.remove('osynlig');
});
svärdbild.addEventListener('mouseout', () => {
    knapprad.classList.add('osynlig');
});

//Väljer knapparna i knappraden med deras id
const euroSvärd = document.getElementById('europeiskt');
const japansktSvärd = document.getElementById('japanskt');
const nyttSvärd = document.getElementById('fantasi');

//Kommer åt div element som visar antalen svärd för bägge svärdsmännen
let antalEUSvärd = document.querySelector('.rubrik');
let antalJPNSvärd = document.querySelector('.räknare');

//Antalen svärd
let currentCountEU = parseInt(antalEUSvärd.innerText.replace(/\D+/g, ''));
let currentCountJPN = parseInt(antalJPNSvärd.innerText.replace(/\D+/g, ''));

//Ökar antalen svärd om svärdet matchar
function läggTillEuSvärd(element) {
    element.innerHTML = `Liechtenauer har ${++currentCountEU} svärd`;
    checkGrattis();
}

function läggTillJPNSvärd(element) {
    element.innerHTML = `Musashi har ${++currentCountJPN} svärd`;
    checkGrattis();
}


function geSvärdTillLiecht() {

    if (nuvarandeSvärd.typ !== eu) {
        alert('Nej tack, bara europeiska svärd!');
    } else {
        alert('Danke!');
        läggTillEuSvärd(antalEUSvärd);
        nuvarandeSvärd = slumpaSvärd();
    }
}

//Vid klick av knappen försök ge ett svärd till Liechtenauer
euroSvärd.addEventListener('click', geSvärdTillLiecht);


function geSvärdTillMusashi() {

    if (nuvarandeSvärd.typ !== jpn) {
        alert('Nej tack, bara japanska svärd!');
    } else {
        alert('Takku!');
        läggTillJPNSvärd(antalJPNSvärd);
        nuvarandeSvärd = slumpaSvärd();
    }
}

//Vid klick av knappen försök ge ett svärd till Musashi
japansktSvärd.addEventListener('click', geSvärdTillMusashi);

nyttSvärd.addEventListener('click', () => {
    nuvarandeSvärd = slumpaSvärd();
});

const duVann = document.querySelector('#grattis');

//Kontrollerar när bägge har minst två svärd var
function checkGrattis(){
    if (currentCountEU >= 2 && currentCountJPN >= 2) {
        duVann.classList.remove('osynlig');
    }
}

document.querySelector('footer').innerHTML = "Gustav Nordgren";