function formTaskHandler(newTask) {
  event.preventDefault()

  const newTask = new Task (currentList.value, descriptionInput.value, priorityInput.value)

  function populateList(task) {
    event.preventDefault()
    let listId = list.id
    const descriptionLocation = taskForm.querySelector("ul")
    let contentLocation = descriptionLocation.querySelector(`#list-${listId}`)
    // let input = taskForm.querySelector("#description-input")
    // let priority = taskForm.querySelector("#priority-level-input")

    contentLocation.innerHTML += `<li> Description: ${newTask.description}</li> <li> Priortity Level:${newTask.priorityLevel}</li>`  
  }
	// allLists.innerHTML += `<li> ${newListInput.value} <button class="destroy-list">x</button> </li>`
  populateList(newTask)
}

