const List = (function createList() {
	const all = []
	let id = 0

	return class List {
		constructor (title){
			this.title = title
			all.push(this)
		}
		static all() {
			return all
		}	
	}		
})()
