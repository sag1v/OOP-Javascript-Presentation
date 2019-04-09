const person = { age: 20, log: logAge }
const user = { age: 30, asPerson: person }


function logAge() {
    console.log(this.age)
}

user.asPerson.log.call(user)