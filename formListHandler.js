function formListHandler(newListInput, allLists) {
	event.preventDefault()
	const newList = new List (newListInput.value)

	allLists.innerHTML += `<li id="list-${newList.id}" class="list-name"> ${newListInput.value} <button class="destroy-list">x</button><ul></ul> </li>`

}
