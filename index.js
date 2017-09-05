document.addEventListener("DOMContentLoaded", function() {
	const newListButton = document.querySelector("#add-list")
	// element containing our input


	const newListInput = document.querySelector("#title-input")
	const allLists = document.querySelector("#all-lists")
	// const deleteButton = allLists.querySelector("h2")

	const taskForm = document.querySelector("#display-task-form")
	const currentLists = []
	newListButton.addEventListener("submit", () => {
		formListHandler(newListInput, allLists)
		taskForm.innerHTML = renderForm()
		populateDropDown(taskForm)
	})


	taskForm.addEventListener("submit", () => {
		event.preventDefault()
		console.log("hello")
		let newTask = submitTask(taskForm)
		populateList(newTask, allLists)
	})

	allLists.addEventListener("click", () => {
		event.preventDefault()
		if (event.target.className === "destroy-list") {
			let deleteThis = List.all().find(list => {
				return list.id === parseInt(event.target.dataset.id)
			})
			let index = List.all().indexOf(deleteThis)
			List.all().splice(index, 1)
			let element = allLists.querySelector(`#list-${deleteThis.id}`)
			let dropDownElement = taskForm.querySelector(`#list-${deleteThis.id}`)
			element.remove()
			dropDownElement.remove()
		} else if (event.target.className === "destroy-task") {
			let taskToDelete = Task.all().find(task => {
				return task.id === parseInt(event.target.dataset.id)
			})
			let index = Task.all().indexOf(taskToDelete)
			Task.all().splice(index, 1)
			let element = allLists.querySelector(`#task-${taskToDelete.id}`)
			element.remove()
		}

	})
})
