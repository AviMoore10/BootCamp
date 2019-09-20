const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

console.log(usersModule)

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('user1')
usersModule.listUsers()

usersModule.addUser('user2')
usersModule.listUsers()

console.log(userModule.users)
