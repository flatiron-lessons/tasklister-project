function formListHandler(newListInput, allLists) {
	event.preventDefault()
	const newList = new List (newListInput.value)

	allLists.innerHTML += `<li id="list-${newList.id}" class="list-name"> ${newListInput.value} <button type="delete" data-id="${newList.id}" class="destroy-list">x</button><ul></ul> </li>`

}
