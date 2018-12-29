function createUser(name, username) {
    const newUser = Object.create(userLogicStore);
    newUser.name = name;
    newUser.username = username;
    return newUser
};

const userLogicStore = {
    sayHi: function () {
        console.log(`Hi, I'm ${this.name}`)
    }
};

const user1 = createUser('Sagiv', 'sag1v');
const user2 = createUser('John', 'john77');
user1.sayHi(); // Hi, I'm Sagiv
user2.sayHi(); // Hi, I'm John