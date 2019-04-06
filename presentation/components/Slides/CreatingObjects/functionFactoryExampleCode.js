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
user1.sayHi(); // Hi, I'm Sagiv