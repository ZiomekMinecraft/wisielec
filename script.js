var divalfabet = document.getElementById("alfabet");
var divimg = document.getElementById("img");
var divpassword = document.getElementById("password");
var deadScreen = document.getElementById("deadScreen");
var winScreen = document.getElementById("winScreen");

const upperCaseLetters = [];
for (let i = 65; i <= 90; i++) {
  upperCaseLetters.push(String.fromCharCode(i));
}

divimg.innerHTML = "<img id=\"obraz\" src=\"./img/s0.jpg\" alt=\"Problem z wczytaniem obrazka!!!\">";

let allLethers = ""
for(let i = 0; i<upperCaseLetters.length; i++){
    allLethers += "<div id=\""+ i +"\" class=\"litera\" onclick=\"OnClick("+ i +")\">"+ upperCaseLetters[i] +"</div>"
}
document.getElementById("litery").innerHTML=allLethers;

var password = "Lubie placki";
var hidePassword = "";

for(let i=0; i<password.length;i++){
    if(password[i]===" "){
        hidePassword+=" "
    }else{
        hidePassword+="-"
    }
}
const RefreshPassword = () =>{
    divpassword.innerHTML=hidePassword;
}
RefreshPassword()


password = password.toUpperCase()



function resizeEvent(){
    var width = window.innerWidth;

    

    if(width>=800){
        divalfabet.style.width = ((width)/2-32.5)+"px"
        divimg.style.width = ((width)/2-32.5)+"px"
    }
    else{
        divalfabet.style.width = (width-32.5)+"px"
        divimg.style.width = (width-32.5)+"px"
    }

    width = divalfabet.style.width;
    var litery = document.getElementsByClassName("litera");

    for(let i=0; i<litery.length; i++){
        let litera = litery[i];
        litera.style.width=(width/5-11)+"px";
        litera.style.height=(width/5-11)+"px";
    }
}
window.addEventListener('resize', resizeEvent)

const CheckString= (string, char) => {
    let flag = false;
    for(let i=0; i<string.length; i++){
        if(string[i]===char){
            flag=true;
        }
    }
    return flag;
};
const ReplaceInString = (string1, string2, char) => {
    let newhidePassword="";
    for(let i=0;i<string1.length;i++){
        if(string1[i]===char){
            newhidePassword+=char;
        }else{
            newhidePassword+=string2[i]
        }
    }
    hidePassword=newhidePassword;
    RefreshPassword()
};


const OnClick = (id)=>{
    var litera = document.getElementById(id)
    if(CheckString(password, upperCaseLetters[id])){
        litera.style.backgroundColor="green";
        ReplaceInString(password, hidePassword, upperCaseLetters[id])
    }else{
        litera.style.backgroundColor="red";
        NextDeadLvl();
    }
    litera.style.cursor="default";
    litera.style.transform=""
    litera.style.opacity=0.5;
    litera.onclick = null;
    
    let isWin = CheckWin();
    console.log(isWin)
    if(isWin){
        winScreen.style.display = "flex";
    }
}

const NextDeadLvl = ()=>{
    const img = document.getElementById("obraz");
    
    let src = "";
    let num = img.src[img.src.length-5]
    for(let i=0; i<img.src.length;i++){
        if(i==img.src.length-5){
            src += parseInt(num)+1
        } else {
        src += img.src[i]
        }
    }
    img.src = src
    if(num >= 8){
        deadScreen.style.display = "flex";
    }

};

const CheckWin=()=>{
    let win = true;
    for(let i = 0; i < hidePassword.length; i++){
        if(hidePassword[i]==="-"){
            win = false;
            console.log(win+"    "+hidePassword[i])
        }
    }
    return win;
};


resizeEvent()