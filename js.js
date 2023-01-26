const { shell } = require('electron')
const wiadomosc = document.getElementById("wiadomosc");
const wiadomoscButton = document.getElementById("wiadomoscClose");
console.log("test");
const ClickClose=()=>{
    wiadomosc.style.display="none";
};

const ClickMessage=()=>{
    if(wiadomosc.style.display!="none")
    shell.openExternal("https://ziomekminecraft.github.io/wisielec")
};

wiadomosc.addEventListener('click', ClickMessage);
wiadomoscButton.addEventListener('click', ClickClose);