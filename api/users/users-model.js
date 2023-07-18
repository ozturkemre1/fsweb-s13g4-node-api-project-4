const uuidv4 = require("uuid")

function generateId(){
    return uuidv4.v4();
}

const allUsers = [];

const defaultUsers = [
    {user_id:generateId(),username:"user1",password:"1234"},
    {user_id:generateId(),username:"user2",password:"1234"},
]
defaultUsers.forEach(x=>{allUsers.push(x)});

function getAllUsers(){
    return allUsers;
}
function deleteUser(username){
    return Promise.resolve(()=>{
        let index = allUsers.findIndex(x=>x.username == username);
        allUsers.splice(index,1);
    })
}
function insert(user){
    user.user_id = generateId();
    allUsers.push(user);
    return user;
}
function findUser(username,password){
    let existUser = allUsers.find(x=>x.username == username && x.password == password);
    return Promise.resolve(existUser);
    //return existUser;
}

module.exports = {
    getAllUsers,
    insert,
    findUser,
    deleteUser
}