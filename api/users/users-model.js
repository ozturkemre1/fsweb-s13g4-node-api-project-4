const uuidv4 = require("uuid");
const { all } = require("../server");

function generateId() {
    return uuidv4.v4();
}

const allUsers = [];
const defaultUsers = [
    {user_id:generateId(),username:"user1",password:"1234"},
    {user_id:generateId(),username:"user2",password:"1234"}
]
defaultUsers.forEach(x=>{allUsers.push(x)});

function getAllUsers(){
    return allUsers;
}
function insert(user){
    user.id = generateId();
    allUsers.push(user);
    return user;
}
function findUser(username,password){
    let existUser = allUsers.find(x=>x.username == username && x.password == password)
    return existUser;
}

module.exports = {
    getAllUsers,
    insert,
    findUser
}