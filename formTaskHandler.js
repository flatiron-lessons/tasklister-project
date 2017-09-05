function renderForm() {
  return `<form id="task-form" action="index.html" method="post">
  <label for="task-form">Select List:</label><br>
  <select id="drop-down">
  <option></option>
  </select><br>

  <label for="task-form">Description:</label><br>
  <input id="description-input" type="text" name="list-title" placeholder="enter a description"><br>

  <label for="task-form">Priority Level:</label><br>
  <input id="priority-level-input" type="text" name="list-title" placeholder="enter a priority level"><br>

  <input id="new-task" type="submit">
  </form>`
}

function populateDropDown(taskForm) {
  const dropDownLocation = taskForm.querySelector("select")
  let dropDownOptions = List.all().forEach((list) => {
    dropDownLocation.innerHTML += `<option id="list-${list.id}" value="${list.id}">${list.title}</option>`
  })
}



function submitTask(taskForm) {
  let submitTask = taskForm.querySelector("#new-task")
  let descriptionInput = taskForm.querySelector("#description-input")
  let priorityInput = taskForm.querySelector("#priority-level-input")
  let currentListId = taskForm.querySelector("select").value
  let currentList = List.all().find(list => {
    return list.id === parseInt(currentListId)
  })
  return new Task (currentList, descriptionInput.value, priorityInput.value)
}

function populateList(newTask, allLists) {
  let listId = newTask.list.id
  // let descriptionLocation = allLists.querySelector("ul")
  let contentLocation = allLists.querySelector(`#list-${listId}`)
  // let input = taskForm.querySelector("#description-input")
  // let priority = taskForm.querySelector("#priority-level-input")

  contentLocation.innerHTML += `<ul><li id="task-${newTask.id}" data-id="${newTask.id}"> Description: ${newTask.description}\n Priortity Level:${newTask.priorityLevel} <button type="delete" data-id="${newTask.id}" class="destroy-task">x</button></li></ul>`
}

function formTaskHandler(newListInput, taskForm) {
  event.preventDefault()

	// allLists.innerHTML += `<li> ${newListInput.value} <button class="destroy-list">x</button> </li>`
  populateDropDown()
  submitTask()
  taskForm.innerHTML = renderForm()
}
