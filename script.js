const mainContent = document.getElementById('main-content');
const sectionList = document.getElementById('list');

function createOrderedList() {
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  sectionList.appendChild(orderedList);
}

createOrderedList();