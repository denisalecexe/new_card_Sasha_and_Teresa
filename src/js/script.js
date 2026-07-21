// VARIABILI 
const buttonCardSasha = document.getElementById("btnSasha");
const buttonCardTeresa = document.getElementById("btnTeresa");

// EVENT LISTENER PER I BOTTONI
// EVENT LISTENER CLICK per aprire e chiudere la card di Sasha
buttonCardSasha.addEventListener('click', () => {
    const infoOpenSasha = document.getElementById("infoSasha");
    infoOpenSasha.classList.toggle("openCard"); // aggiunge o rimuove la classe openCard
})

// EVENT LISTENER CLICK per aprire e chiudere la card di Teresa
buttonCardTeresa.addEventListener('click', () => {
    const infoOpenTeresa = document.getElementById("infoTeresa"); 
    infoOpenTeresa.classList.toggle("openCard"); // aggiunge o rimuove la classe openCard
})