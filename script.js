function fastLog(text){
    console.log(text);
    return"haha";
}

function buttonClicked(event);{
    event.target.classList.toggle("clicked");

    const fastLogResult = fastLog("Ezt a szöveget szeretném kilogoltatni");

    console.log(fastLogResult);
};




function loadEvent() {
    console.log('the page has loaded');


    function toggleClicked(event){
        event.target.classList.toggle("clicked");
    }
};

document.getElementById("menu-btn").addEventListener("click", toggleClicked);

window.addEventListener("load", loadEvent);