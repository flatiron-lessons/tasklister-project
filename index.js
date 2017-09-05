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

	 // add listener to the container
	 allLists.addEventListener("click", () => {
		 event.preventDefault()
		 // check event.target === "destroy-list"
		 if (event.target.className === "destroy-list") {
			 // find the id associated with this button and delete it
			 let deleteThis = List.all().find(list => {
				 return list.id === parseInt(event.target.dataset.id)
			 })
			 let index = List.all().indexOf(deleteThis)
			 List.all().splice(index, 1)
			 //find id associated with this delete button)
			 // delete this instance and its contents
			 let element = allLists.querySelector(`#list-${deleteThis.id}`)
			 let dropDownElement = taskForm.querySelector(`#list-${deleteThis.id}`)
			 element.remove()
			console.log(dropDownElement)
			dropDownElement.remove()
		 }

	 }
 )





})
