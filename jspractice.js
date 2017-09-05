function Player() {
	this.name;
	this.hitpoints = 100;
	this.attack = function attack(opponent) {
		let damage = Math.floor(Math.random() * 20)
		let hitChance = Math.floor(Math.random() * 4)
		console.log(this.name+ " just swung at " +opponent.name);

		if (hitChance === 1) {
			opponent.hitpoints -= damage;
			if (damage > 10) {
				console.log(`${opponent.name} takes a heavy shot for ${damage} damage!`)
				console.log(`${opponent.name} has ${opponent.hitpoints} hitpoints left!`)
			} else {
				console.log(`${opponent.name} takes a light shot for ${damage} damage.`)
				console.log(`${opponent.name} has ${opponent.hitpoints} hitpoints left!`)
			}

		} else {
			console.log(opponent.name+ " dodged the attack!")
		}
    }
}

let p1 = new Player()
let p2 = new Player()
p1.name = "James"
p2.name = "Someone Else"

// p1.attack(p2)

function fight(p1, p2) {
	while (p1.hitpoints > 0 && p2.hitpoints > 0) {
		p1.attack(p2)
		p2.attack(p1)
	}	
	if (p1.hitpoints === 0) {
		console.log("P1 has died!")
	} else {
		console.log("P2 has died!")
	}
}

fight(p1,p2)