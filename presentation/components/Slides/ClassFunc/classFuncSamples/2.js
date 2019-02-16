class CreateUser {
    constructor(name, userName) {
        this.name = name;
        this.userName = userName;
    }


    
}

const user1 = new CreateUser('Sagiv', 'sag1v');
const user2 = new CreateUser('John', 'john77');
user1.sayHi(); // Hi, I'm Sagiv
user2.sayHi(); // Hi, I'm John