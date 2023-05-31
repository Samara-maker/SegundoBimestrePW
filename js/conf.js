const botoes = document.querySelectorAll("[data-item]");
botoes.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        atualizaItem(evento.target.textContent, evento.target.parentNode);
    });
});


function atualizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[data-qtde]");
    if(acao==="-"){ // 3 === é identico
        item.value = parseInt(item.value)-1;
    }else{
        item.value = parseInt(item.value)+1;
    } 
}