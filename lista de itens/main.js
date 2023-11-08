// conexão com elementos html
//encapsulando os elementos em uma variavel

// filtro de pesquisa
const filter = document.getElementById('filter');
// formulario para add item
const form = document.getElementById('addForm');
// Lista para receber novos itens adicionados
const list = document.getElementById('items');

filter.addEventListener('keyup', function(){
    alert('VI VC DIGITANDO....')

});

form.addEventListener('submit', function(){
    alert('Boa Escolha')
});

list.addEventListener('click', function(){
    alert('Item Removido!!')
});