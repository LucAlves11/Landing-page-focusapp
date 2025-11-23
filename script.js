
const botoesPopup = document.querySelectorAll(".botao-popup");
const elemPopup = document.querySelector(".popup");
const elemBotaoFechar = document.querySelector(".botao-fechar");

botoesPopup[0].addEventListener('click', function(){
    elemPopup.style.display = "flex";
});

botoesPopup[1].addEventListener('click', function(){
    elemPopup.style.display = "flex";
});

elemBotaoFechar.addEventListener('click', function(){
    elemPopup.style.display = "none";
});