function setScreen(screen_id){
    document.querySelectorAll(".screen").forEach(x => {x.style.display = x.id != screen_id ? "none" :"block"});
}
