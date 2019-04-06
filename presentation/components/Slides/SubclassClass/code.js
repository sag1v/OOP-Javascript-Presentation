class User {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(`Hi, I'm ${this.name}`)
	}
}

/* ----------------------------------------------------*/

class GroupUser extends User {
	constructor(name, groupName) {
		// "this" is uninitilized yet...
		super(name);
		//this = Reflect.construct(User, [name], GroupUser);
		this.groupName = groupName;
	}
	getGroup() {
		console.log(`${this.name} - ${this.groupName}`);
	}
}

/* ------------------------------------------------------*/

const user1 = new User('Sagiv');
user1.sayHi(); // Hi, I'm Sagiv

const memberUser = new GroupUser('John', 'customers');
memberUser.getGroup(); // John - customers
memberUser.sayHi(); // Hi, I'm John