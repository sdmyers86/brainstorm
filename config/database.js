if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://panda:panda123@ds235431.mlab.com:35431/brainstorm-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost:27017/brainstorm-dev'}
}