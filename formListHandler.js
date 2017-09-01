function formListHandler(newListInput, allLists) {
	event.preventDefault()
	const newList = new List (newListInput.value)

	allLists.innerHTML += `<li> ${newListInput.value} <button class="destroy-list">x</button> </li>`

}