document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const task = document.getElementById('new-task-description');
    const textValue =task.value;
    const prioretyList = document.getElementById('prioretyList');
    const prioretyValue= prioretyList.options[prioretyList.selectedIndex].text;
    addToList(textValue, prioretyValue);
  })
});

function addToList(todo,prioretyList){
  const list= document.createElement('li');
  list.innerText = todo;
  list.style.backgroundColor = Color(prioretyList);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
  const tasks = document.getElementById('tasks');
  tasks.appendChild(list);
}

function Color(value){
  if(value === 'High'){
    return 'red';
  }
  if(value=== 'Medium'){
    return 'yellow';
  }
  if(value === 'Low'){
    return 'green';
  }
}