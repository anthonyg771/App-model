const modal = document.getElementById("div-modal");

function abrirModal(){
    modal.classList.remove("divEscondida");
    modal.classList.add("divVisivel");
}
function fecharModal(){
    modal.classList.remove("divVisivel");
    modal.classList.add("divEscondida");
}