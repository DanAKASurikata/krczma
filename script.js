function setScreen(screen_id){
    document.querySelectorAll(".screen").forEach(x => {x.style.display = x.id != screen_id ? "none" :"block";document.getElementById("ui").style.display = (x.id == "mainMenu" || x.id == "kal") ? "none" :"block"});
}

function kalkulaczka(){
    setScreen("kal");
}

let t = 0;
let m = 0;
function poczitej(){
    t = t + Number(document.getElementById("mass").value);
    m = m + Number(document.getElementById("length").value);
    document.getElementById("hmotnost").innerText = t;
    document.getElementById("delka").innerText = m;
    document.getElementById("mass").value = "";
    document.getElementById("length").value = "";
}
function nuluj(){
    t = 0;
    m = 0;
    document.getElementById("hmotnost").innerText = t;
    document.getElementById("delka").innerText = m;
}