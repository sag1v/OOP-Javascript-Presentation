const user3 = Object.create(null);
user3.name = 'Anny';
user3.username = 'anny123';
user3.sayHi = function () {
  console.log(`Hi, I'm ${user3.name}`)
};

user3.sayHi(); // Hi, I'm Anny