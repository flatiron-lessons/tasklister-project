function formTaskHandler(newListInput, taskForm) {
  event.preventDefault()

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

  function populateDropDown() {
    const dropDownLocation = taskForm.querySelector("select")
    index = 0 
    let dropDownOptions = List.all().forEach((list) => { 
      dropDownLocation.innerHTML += `<option id="list-${index}" value="${list}">${list.title}</option>`
      list.id = index
      index++

    })

  }

  function populateList(newTask) {
    event.preventDefault()
    let listId = list.id
    const descriptionLocation = taskForm.querySelector("ul")
    let contentLocation = descriptionLocation.querySelector(`#list-${listId}`)
    // let input = taskForm.querySelector("#description-input")
    // let priority = taskForm.querySelector("#priority-level-input")

    contentLocation.innerHTML += `<li> Description: ${newTask.description}</li> <li> Priortity Level:${newTask.priorityLevel}</li>`  
  }

  function submitTask() {
    let submitTask = taskForm.querySelector("#new-task")
    submitTask.addEventListener("submit", populateList(newTask))
    event.preventDefault()
    let descriptionInput = taskForm.querySelector("#description-input")
    let priorityInput = taskForm.querySelector("#priority-level-input")
    let currentList = taskForm.querySelector(`#list-${list.id}`)
    const newTask = new Task (currentList.value, descriptionInput.value, priorityInput.value)

  }

	// allLists.innerHTML += `<li> ${newListInput.value} <button class="destroy-list">x</button> </li>`
	taskForm.innerHTML = renderForm()
  populateDropDown()
  submitTask()
  taskForm.innerHTML = renderForm()

}

