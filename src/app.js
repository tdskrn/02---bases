// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// import './js-foundation/01-template'
// const {getUserById }= require('./js-foundation/03-callbacks')
const { getUserById } = require('./js-foundation/04-arrows')

// console.log(emailTemplate);
const id = 2

getUserById(id, (error, user) => {
  if (error) {
    throw new Error(error)
  }
  console.log(user)
})
