const formulario = document.querySelector("#meuForm");
const convidados = document.querySelector("#lista-convidados");
const alunos= JSON.parse(localStorage.getItem("aunos")) ||[];

    alunos.forEach((elemento)=>
    {
        console.log(elemento.aluno,elemento.qtde)
    });
    
formulario.addEventListener("submit",(evento)=>
{
    evento.preventDefault()/*fechar*/
    const aluno = evento.target.elements['aluno'];
    const qtde = evento.target.elements['qtde'];
    novoElemento(aluno.value,qtde.value);
    aluno.value="";
    qtde.value="";
});

/*novo elemento*/

function novoElemento(aluno,qtde)
{
    const novoItem =document.createElement('li');
    novoItem.innerHTML = aluno;
    novoItem.classList.add("item");
    const numeroItem = document.createElement('span');
    numeroItem.innerHTML = qtde;
    novoItem.appendChild(numeroItem);
    convidados.appendChild(novoItem);
    
    const alunoStorage={
        "aluno":aluno,
        "qtde":qtde
    }
    
    
}
