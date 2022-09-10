const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const olListaTarefa = document.getElementById('lista-tarefas');
const listItens = document.getElementsByTagName('li');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonRemoverFinalizados = document.getElementById('remover-finalizados');

function createElementLi() {
  const li = document.createElement('li');
  li.innerText = inputText.value;
  olListaTarefa.appendChild(li);
  inputText.value = '';
}

function addClassSelected(event) {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function listItemClick() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('click', addClassSelected);
  }
}

// classlist.toggle -> https://pt.stackoverflow.com/questions/492295/qual-a-diferen%C3%A7a-entre-usar-classname-classlist-toggle-e-classlist-add
function addClassCompleted(event) {
  event.target.classList.toggle('completed');
}

function listItemDblClick() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('dblclick', addClassCompleted);
  }
}

function deleteChild() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].remove();
  } 
}

function buttonApaga() {
  buttonApagaTudo.addEventListener('click', function (event) {
    event.target = deleteChild();
  });
}

function deleteChildCompleted() {
  const completed = document.getElementsByClassName('completed');
  for (let index = 0; index < completed.length; index += 1) {
    olListaTarefa.removeChild(completed[index]);
  }
}

function buttonApagaCompleted() {
  buttonRemoverFinalizados.addEventListener('click', function (event) {
    event.target = deleteChildCompleted();
  })
}

buttonCriarTarefa.addEventListener('click', function(event) {
  event.target = createElementLi();
  listItemClick();
  listItemDblClick();
  buttonApaga();
  buttonApagaCompleted();
})

