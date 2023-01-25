// Main Screen
const divalfabet = document.getElementById("alfabet");
const divimg = document.getElementById("img");
const divpassword = document.getElementById("password");

// Dead Screen
const deadScreen = document.getElementById("deadScreen");
const deadButton = document.getElementById("deadButton");

// Win Screen
const winScreen = document.getElementById("winScreen");
const winButton = document.getElementById("winButton");

// Password Screen
const StartGameButton = document.getElementById("passButton");
const PasswordInput = document.getElementById("hasloInput");
const typePasswordScreen = document.getElementById("typePasswordScreen");


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

var password = "";
var hidePassword = "";

const hidePasswordFunction=()=>{
    hidePassword = "";
    for(let i=0; i<password.length;i++){
        if(password[i]===" "){
            hidePassword+=" ";
        }else{
            hidePassword+="-";
        }
        RefreshPassword()
    }
}
const RefreshPassword = () =>{
    divpassword.innerHTML=hidePassword;
};


const setPassword=()=>{
    password = PasswordInput.value;
    PasswordInput.value = "";
    password = password.toString().toUpperCase();
    password = password.toString().replace("Ą", "A");
    password = password.toString().replace("Ć", "C");
    password = password.toString().replace("Ę", "E");
    password = password.toString().replace("Ł", "L");
    password = password.toString().replace("Ń", "N");
    password = password.toString().replace("Ó", "O");
    password = password.toString().replace("Ś", "S");
    password = password.toString().replace("Ż", "Z");
    password = password.toString().replace("Ź", "Z");

    password = password.toString().replace("`", "");
    password = password.toString().replace("~", "");
    password = password.toString().replace("!", "");
    password = password.toString().replace("@", "");
    password = password.toString().replace("#", "");
    password = password.toString().replace("$", "");
    password = password.toString().replace("%", "");
    password = password.toString().replace("^", "");
    password = password.toString().replace("&", "");
    password = password.toString().replace("*", "");
    password = password.toString().replace("(", "");
    password = password.toString().replace(")", "");
    password = password.toString().replace("-", "");
    password = password.toString().replace("_", "");
    password = password.toString().replace("+", "");
    password = password.toString().replace("=", "");
    password = password.toString().replace("[", "");
    password = password.toString().replace("]", "");
    password = password.toString().replace("{", "");
    password = password.toString().replace("}", "");
    password = password.toString().replace("\\", "");
    password = password.toString().replace("|", "");
    password = password.toString().replace(";", "");
    password = password.toString().replace(":", "");
    password = password.toString().replace("'", "");
    password = password.toString().replace("\"", "");
    password = password.toString().replace(",", "");
    password = password.toString().replace(".", "");
    password = password.toString().replace("<", "");
    password = password.toString().replace(">", "");
    password = password.toString().replace("/", "");
    password = password.toString().replace("?", "");
    password = password.toString().replace("*", "");
    
    password = password.toString().replace("1", "");
    password = password.toString().replace("2", "");
    password = password.toString().replace("3", "");
    password = password.toString().replace("4", "");
    password = password.toString().replace("5", "");
    password = password.toString().replace("6", "");
    password = password.toString().replace("7", "");
    password = password.toString().replace("8", "");
    password = password.toString().replace("9", "");
    password = password.toString().replace("0", "");
    if(password.length==0){
        PasswordInput.style.borderColor="red";
        return;
    }
    hidePasswordFunction();
    RefreshPassword();
    typePasswordScreen.style.display="none";
};


password = password.toUpperCase()



function resizeEvent(){
    var width = window.innerWidth;

    

    if(width>=800){
        divalfabet.style.width = ((width)/2-33)+"px"
        divimg.style.width = ((width)/2-33)+"px"
    }
    else{
        divalfabet.style.width = (width-33)+"px"
        divimg.style.width = (width-33)+"px"
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

const RestartLvl=()=>{
    window.location.reload();
};

deadButton.addEventListener('click', RestartLvl);
winButton.addEventListener('click', RestartLvl);
StartGameButton.addEventListener('click', setPassword);
resizeEvent()