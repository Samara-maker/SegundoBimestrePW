const formulario = document.querySelector("#meuForm");

const convidados = document.querySelector("#lista-convidados");

formulario.addEventListener("submit",(evento)=>
{
    evento.preventDefault()/*fechar*/
    novoElemento(evento.target.elements['aluno'].value, evento.target.elements['qtde'].value)
});

/*novo elemento*/

function novoElemento(aluno,qtde)
{
    const novoItem =document.createElement('li')
    novoItem.innerHTML = aluno;
    novoItem.classList.add("item")
    const numeroItem = document.createElement('span')
    numeroItem.innerHTML = qtde
    novoItem.appendChild(numeroItem)
    convidados.appendChild(novoItem)
}