const logAge = () => {
	console.log(this.age)
}

const person = { age: 20, log: logAge }
const user = { age: 30, asPerson: person }


user.asPerson.log.call(user)