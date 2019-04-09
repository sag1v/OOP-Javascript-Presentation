const person = { age: 20, log: logAge }
const user = { age: 30, asPerson: person }

person.log = logAge.bind(user)

function logAge() {
    console.log(this.age)
}

user.asPerson.log()