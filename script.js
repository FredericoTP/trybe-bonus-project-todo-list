const mainContent = document.getElementById('main-content');
const sectionList = document.getElementById('list');
const sectionAddItem = document.getElementById('add-item');
const sectionButtons = document.getElementById('buttons');

function createOrderedList(local, id) {
  const createOrderedList = document.createElement('ol');
  createOrderedList.id = id;
  local.appendChild(createOrderedList);
}

createOrderedList(sectionList, 'lista-tarefas');

function createButton(local, id) {
  const createButton = document.createElement('button');
  createButton.id = id;
  local.appendChild(createButton);
}

createButton(sectionAddItem, 'criar-tarefa');
createButton(sectionButtons, 'apaga-tudo');

const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.innerText = 'Criar tarefa';

const buttonApagatudo = document.getElementById('apaga-tudo');
buttonApagatudo.innerText = 'Apagar tudo';

function createLi() {
  const inputText = document.getElementById('texto-tarefa').value;
  const createLi = document.createElement('li');
  createLi.className = 'task';
  const orderedList = document.getElementById('lista-tarefas');
  createLi.innerText = inputText;
  orderedList.appendChild(createLi);
}

function buttonCreateLi() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', function (event) {
    event.target = createLi();
    event.target = document.getElementById('texto-tarefa').value = '';
    liRecebeClick();
    liRecebeDblClick();
    buttonApagaTudo();
  });
}

buttonCreateLi();

function recebeClick(event) {
  const listSelected = document.querySelectorAll('.task');
  for (let index = 0; index < listSelected.length; index += 1) {
    listSelected[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function liRecebeClick() {
  const li = document.getElementsByClassName('task');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', recebeClick);
  }
}

function recebeDblClick(event) {
  const listSelected = document.querySelectorAll('.task');
  for (let index = 0; index <= listSelected.length; index += 1) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

function liRecebeDblClick() {
  const li = document.getElementsByClassName('task');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', recebeDblClick);
  }
}

liRecebeDblClick();

function deleteChild() {
  const list = document.getElementsByClassName('task');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
  
}

function buttonApagaTudo() {
  const buttonApagaTudo = document.getElementById('apaga-tudo');
  buttonApagaTudo.addEventListener('click', function (event) {
    event.target = deleteChild();
  });
}
