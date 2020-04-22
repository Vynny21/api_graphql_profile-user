const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./controllers/resolvers');
const mongoose = require('mongoose');

//Conexão com o MongoDB
mongoose.connect('mongodb+srv://vynny_mongodb:vynny_040497@cluster0-yzg9p.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Servidor GraphQL
const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'routes', 'schema.graphql'),
  resolvers
});

server.start();