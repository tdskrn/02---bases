const users = [
    {
        id: 1,
        name: "Jane",
    },
    {
        id: 2,
        name: "Jack",
    },
];

function getUserById(id, callback){

    const user= users.find(function (user){
        return user.id === id;
    });
    if(!user){
        return callback(`user not found with id ${id}`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById
}