const user1 = new createUser('Sagiv', 'sag1v');

/* ---------------------- The Change ----------------------------------- */
function createUser(name, username) {
    /*We are not doing this anymore:
      So how can we link the newUser.__proto__ to our userLogicStore??? */
    const newUser = Object.create(userLogicStore);
    
    /*We can't refer to our object now,
      Sow how can we assign new keys to the new object??? */
    newUser.name = name;
    newUser.username = username;
    
    /* We are not doing this anymore: */
    return newUser;
};