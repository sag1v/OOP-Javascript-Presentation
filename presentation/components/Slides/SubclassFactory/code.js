function createUser(name) {
    const newUser = Object.create(userLogic);
    newUser.name = name;
    return newUser
};
const userLogic = {
    sayHi: function () {
        console.log(`Hi, I'm ${this.name}`)
    }
};
/* -------------------------------------------------*/
function createGroupMember(name, groupName) {
    const newMemberUser = createUser(name);
    Object.setPrototypeOf(newMemberUser, memberStore);
    newMemberUser.groupName = groupName;
    return newMemberUser
};
const memberStore = {
    getGroup: function () {
        console.log(`${this.name} - ${this.groupName}`);
    }
};
Object.setPrototypeOf(memberStore, userLogic);
/* --------------------------------------------------*/
const user1 = createUser('Sagiv');
user1.sayHi(); // Hi, I'm Sagiv

const memberUser = createGroupMember('John','customers');
memberUser.getGroup(); // John - customers
memberUser.sayHi(); // Hi, I'm John