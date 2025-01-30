let pglt = [1,-1,0,-1,2];
let pgup = [3,-1,-1,-1,3];//předposlední má být ve finále 4
let pgdn = [-1,-1,-1,0,-1];
let pgrg = [-1,0,4,-1,-1];//první má být ve finále 2
let screen = 0;
let penize = 5000;
let invent = [0,0,0,5,20];
let invName = ["voda","vodka","moszt","babovka","bamburky"];
let tutprog = 0;

function setScreen(screen_id){
    document.querySelectorAll(".screen").forEach(x => {
        x.style.display = x.id != screen_id ? "none" :"block";
    });
    document.getElementById("ui").style.display = (screen_id == "mainMenu" || screen_id == "smrt" || screen_id == "boj") ? "none" :"block";
    screen = screen_id.replace("r", "");
    document.getElementById("lt").style.display = (pglt[screen] == -1) ? "none" :"block";
    document.getElementById("up").style.display = (pgup[screen] == -1) ? "none" :"block";
    document.getElementById("dn").style.display = (pgdn[screen] == -1) ? "none" :"block";
    document.getElementById("rg").style.display = (pgrg[screen] == -1) ? "none" :"block";
    document.getElementById("zustatek").innerText = penize;
    if(screen_id == "r1"){
        for (let i = 0; i < 4; i++) {
            document.getElementById(invName[i]).innerText = `${invent[i]}`;
        }
    }
}

function pgLt(){
    setScreen(`r${pglt[screen]}`);
    if(tutprog == 1){
        tutorial();
    }
}
function pgUp(){
    setScreen(`r${pgup[screen]}`);
    if(tutprog == 3){
        tutorial();
    }
}
function pgDn(){
    setScreen(`r${pgdn[screen]}`);
}
function pgRg(){
    setScreen(`r${pgrg[screen]}`);
}

let tutyes = true;

function startujeme(){
    setScreen("r0");
    tutorial();
    alert("JEDNÁ SE O VÝVOJOVOU VERZI!!!!!\nTOTO NENÍ FINÁLNÍ VERZE!!!!!!!!!!")
}

function tutorial(){
    if(tutyes == true){
        if(tutprog == 0){
            if(confirm("Přeješ si projít tutoriál? \nVelmi ti to doporučuji =)") == true){
                alert("Jdi do skladu a objednej vodu, vodku a jablečný mošt. \n\nZbytek zásob které potřebuješ ti přinesla babička.")
            } else {
                tutyes = false;
            }
        }
        if(tutprog == 1){
            alert("Měl by jsi vidět možnosti nákupu. Kup požadované věci.\nNezapomeň, že věci co si koupíš si musíš nejdříve vyzvednout!")
        }
        if(tutprog == 2){
            alert(`(jedná se o "místnost" číslo 3)`);
        }
        if(tutprog == 3){
            alert("Nyní si vyzvedni zásilku.")
        }
        tutprog++;
    }
}

let inventTemp = [0,0,0,]
function nakup(zbozi){
    if(zbozi == 0){
        inventTemp[zbozi]++;
        penize = penize - 50;
    }
    if(zbozi == 1){
        inventTemp[zbozi]++;
        penize = penize - 450;
    }
    if(zbozi == 2){
        inventTemp[zbozi]++;
        penize = penize - 150;
    }
    document.getElementById("zustatek").innerText = penize;
    document.getElementById(invName[zbozi]).innerText = invent[zbozi];
    if(penize < 1){
        alert("Jsi šptaný, nemáš prachy =)");
        setScreen("mainMenu");
        alert("Pro novou hru dej znovu načíst stránku =)");
    }
    if(inventTemp[0] > 0 && inventTemp[1] > 0 && inventTemp[2] > 0 && tutprog == 2){
        alert("Své zboží si jdi vyzvednout na nakládací rampu.");
        tutorial();
    }
}

function ziskat(){
    if(confirm("Byl jsi přepaden! Chceš se bránit?") == true){
        alert("Well... I wish you good luck :)");
        setScreen("boj");
    }
    else{
        alert("Zemřel jsi x(");
        setScreen("smrt");
    }
    //for (let i = 0; i < 3; i++) {
    //    invent[i] = inventTemp[i];
    //}
}
