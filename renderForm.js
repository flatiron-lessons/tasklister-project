

function renderForm(newListInput, taskForm) { 
  event.preventDefault()

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

    function populateDropDown() {
    const dropDownLocation = taskForm.querySelector("select")
    index = 0 
    let dropDownOptions = List.all().forEach((list) => { 
      dropDownLocation.innerHTML += `<option id="list-${index}" value="${list}">${list.title}</option>`
      list.id = index
      index++

    })
  }
}

// renderForm(newListInput, taskForm)
  

