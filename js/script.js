function abrirMenu(){
    const divMenu = document.getElementById('respMenu').classList /*esse = é pra dizer que é uma atribuição*/
    divMenu.toggle('abrir');

    const ic = document.getElementById('icone');
    if(divMenu.contains('abrir')){
        ic.innerHTML = 'close';
    }else{
        ic.innerHTML = 'menu';
    }
}

