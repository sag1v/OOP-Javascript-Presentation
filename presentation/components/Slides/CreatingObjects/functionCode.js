function createUser(name, username) {
  const newUser = {};
  newUser.name = name;
  newUser.username = username;
  newUser.sayHi = function () {
    console.log(`Hi, I'm ${newUser.name}`)
  };
  return newUser
}

const user1 = createUser('Sagiv', 'sag1v');
const user2 = createUser('John', 'john77');
user1.sayHi(); // Hi, I'm Sagiv
user2.sayHi(); // Hi, I'm John