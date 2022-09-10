const buttonCriarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const olListaTarefa = document.getElementById('lista-tarefas');
const listItens = document.getElementsByTagName('li');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonRemoverFinalizados = document.getElementById('remover-finalizados');
const buttonSalvarTarefas = document.getElementById('salvar-tarefas');
const buttonMoverCima = document.getElementById('mover-cima');
const buttonMoverBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');

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

buttonCriarTarefa.addEventListener('click', function (event) {
  event.target = createElementLi();
  listItemClick();
  listItemDblClick();
  buttonApaga();
  buttonApagaCompleted();
})

function saveList() {
  localStorage.setItem('lista', JSON.stringify(olListaTarefa.innerHTML));
}

buttonSalvarTarefas.addEventListener('click', function (event) {
  event.target = saveList();
});

function initialize() {
  const lista = localStorage.getItem('lista');
  const listaStr = JSON.parse(lista);

  if (lista) {
    olListaTarefa.innerHTML = listaStr;
  }
}

initialize();

function moverCima() {
  const selected = document.querySelector('.selected');
  if (selected === null) {
    alert('Selecione um item!');
  } else if (selected !== null && selected.previousSibling !== null) {
    const str = [];
    str.push(selected.previousSibling.innerText);
    selected.previousSibling.innerHTML = selected.innerHTML;
    selected.classList.remove('selected');
    selected.previousSibling.classList.add('selected');
    selected.innerText = str;
  } else {
    alert('Não existe item para cima!');
  }
}

buttonMoverCima.addEventListener('click', function (event) {
  event.target = moverCima();
})

function moverBaixo() {
  const selected = document.querySelector('.selected');
  if (selected === null) {
    alert('Selecione um item!');
  } else if (selected !== null && selected.nextSibling !== null) {
    const str = [];
    str.push(selected.nextSibling.innerText);
    selected.nextSibling.innerHTML = selected.innerHTML;
    selected.classList.remove('selected');
    selected.nextSibling.classList.add('selected');
    selected.innerText = str;
  } else {
    alert('Não existe item para baixo!');
  }
}

buttonMoverBaixo.addEventListener('click', function (event) {
  event.target = moverBaixo();
})

function deleteSelected() {
  const selected = document.querySelector('.selected');
  olListaTarefa.removeChild(selected);
}

buttonRemoverSelecionado.addEventListener('click', function(event) {
  event.target = deleteSelected();
})
