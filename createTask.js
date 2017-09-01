const Task = (function createTask() {
	const all = []
	let id = 0

	return class Task {
		constructor (list, description, priorityLevel){
			this.list = list
			this.description = description
			this.priorityLevel = priorityLevel
			all.push(this)
		}
	static all() {
		return all
	}
}
})()

// const Task = createTask()
// const task1 = new Task("list1", "desc1", "priortiy5")

