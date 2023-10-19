const users = [
  {
    id: 1,
    name: 'Jane'
  },
  {
    id: 2,
    name: 'Jack'
  }
]

const getUserById = (id, callback) => {
  const user = users.find(user => user.id === id)

  user ? callback(null, user) : callback(`User not found with id ${id}`)
}

module.exports = {
  getUserById
}
