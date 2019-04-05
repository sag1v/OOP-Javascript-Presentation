function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`)
};

/* ----------------------------------------------------*/

function GroupUser(name, groupName) {
    this.groupName = groupName;
    User.call(this, name);
};

GroupUser.prototype.getGroup = function () {
    console.log(`${this.name} - ${this.groupName}`);
}

Object.setPrototypeOf(GroupUser.prototype, User.prototype);

/* ------------------------------------------------------*/

const user1 = new User('Sagiv');
user1.sayHi(); // Hi, I'm Sagiv

const memberUser = new GroupUser('John', 'customers');
memberUser.getGroup(); // John - customers
memberUser.sayHi(); // Hi, I'm John