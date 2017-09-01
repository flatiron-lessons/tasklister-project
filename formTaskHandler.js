function formTaskHandler(newListInput, taskForm) {

	function renderForm() { 
		return `<form id="task-form" action="index.html" method="post">
       <label for="task-form">Select List:</label><br>
        <select>
          <option>${List.all()}</option>
        </select><br>

        <label for="task-form">Description:</label><br>
        <input id="description-input" type="select" name="list-title" placeholder="enter a description"><br>

        <label for="task-form">Priority Level:</label><br>
        <input id="priority-level-input" type="text" name="list-title" placeholder="enter a priority level"><br>
      </form>`
  	}

	console.log("you made it")
	// allLists.innerHTML += `<li> ${newListInput.value} <button class="destroy-list">x</button> </li>`
	taskForm.innerHTML = renderForm()

      

}

