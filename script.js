let pglt = [1,-1,0,-1,2];
let pgup = [3,-1,-1,4,3];
let pgdn = [-1,-1,-1,0,-1];
let pgrg = [2,0,4,-1,-1];
let screen = 0;
let penize = 5000;

function setScreen(screen_id){
    document.querySelectorAll(".screen").forEach(x => {
        x.style.display = x.id != screen_id ? "none" :"block";
    });
    document.getElementById("ui").style.display = (screen_id == "mainMenu") ? "none" :"block";
    screen = screen_id.replace("r", "");
    document.getElementById("lt").style.display = (pglt[screen] == -1) ? "none" :"block";
    document.getElementById("up").style.display = (pgup[screen] == -1) ? "none" :"block";
    document.getElementById("dn").style.display = (pgdn[screen] == -1) ? "none" :"block";
    document.getElementById("rg").style.display = (pgrg[screen] == -1) ? "none" :"block";
    document.getElementById("zustatek").innerText = penize;
}

function pgLt(){
    setScreen(`r${pglt[screen]}`);
    tutorial();
}
function pgUp(){
    setScreen(`r${pgup[screen]}`);
}
function pgDn(){
    setScreen(`r${pgdn[screen]}`);
}
function pgRg(){
    setScreen(`r${pgrg[screen]}`);
}

let tutprog = 0;
let tutyes = true;

function startujeme(){
    setScreen("r0");
    tutorial();
}

function tutorial(){
    if(tutyes == true){
        if(tutprog == 0){
            if(confirm("Přeješ si projít tutoriál? \nVelmi ti to doporučuji =)") == true){
                alert("Jdi do skladu a objednej vodu, vodku a jablečný mošt. \n\nZbytek zásob které potřebuješ ti přinesla babička.")
                console.log("tutyes");
            } else {
                tutyes = false;
                console.log("tutno");
            }
        }
        if(tutprog == 1){
            alert("Měl by jsi vidět možnosti nákupu. Kup požadované věci.")
        }
        tutprog++;
    }
}

let invent = [0,0,0,5,20];
let invName = ["voda","vodka","moszt","babovka","bamburky"];
function nakup(zbozi){
    if(zbozi == 0){
        invent[zbozi]++;
        penize = penize - 50;
    }
    if(zbozi == 1){
        invent[zbozi]++;
        penize = penize - 450;
    }
    if(zbozi == 2){
        invent[zbozi]++;
        penize = penize - 150;
    }
    document.getElementById("zustatek").innerText = penize;
    document.getElementById(invName[zbozi]).innerText = invent[zbozi];
    if(penize < 1){
        alert("Jsi šptaný, nemáš prachy =)");
        setScreen("mainMenu");
        alert("Pro novou hru dej znovu načíst stránku =)")
    }
}
