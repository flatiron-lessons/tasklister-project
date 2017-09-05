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
		renderForm(newListInput, taskForm)
	})

	// Display form to add description and priority level to task:
    let descriptionInput = taskForm.querySelector("#description-input")
    let priorityInput = taskForm.querySelector("#priority-level-input")
    // let currentList = taskForm.querySelector(`#list-${list.id}`)

	const submitTask = taskForm.querySelector("#new-task")
    submitTask.addEventListener("submit", () => {
    	formTaskHandler(currentList, descriptionInput, priorityInput)
    })
})