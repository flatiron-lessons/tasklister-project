const Task = (function createTask() {
	const all = []
	let id = 0

	return class Task {
		constructor (list, description, priorityLevel){
			this.list = list
			this.description = description
			this.priorityLevel = priorityLevel
			all.push(this)
			this.id = id++
		}
		static all() {
			return all
		}
	}
})()
