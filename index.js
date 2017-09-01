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
		formTaskHandler(newListInput, taskForm)
	})

	
})