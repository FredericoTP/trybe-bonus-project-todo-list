const mainContent = document.getElementById('main-content');
const sectionList = document.getElementById('list');
const sectionAddItem = document.getElementById('add-item');

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

const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.innerText = 'Criar tarefa';

function createLi() {
  const inputText = document.getElementById('texto-tarefa').value;
  const createLi = document.createElement('li');
  const orderedList = document.getElementById('lista-tarefas');
  createLi.innerText = inputText;
  orderedList.appendChild(createLi);
}

function buttonCreateLi() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', function(event) {
    event.target = createLi();
    event.target = document.getElementById('texto-tarefa').value = '';
  });
}

buttonCreateLi()