function formListHandler(newListInput, allLists) {
	event.preventDefault()
	const newList = new List (newListInput.value)

	allLists.innerHTML += `<li class="list-name"> ${newListInput.value} <button class="destroy-list">x</button><ul></ul> </li>`

}