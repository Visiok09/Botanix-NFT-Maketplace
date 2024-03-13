const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const MONGODB = process.env.PRIVATE_KEY;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors());

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  mongoose
    .connect(MONGODB, { useUnifiedTopology: true }) // useUnifiedTopology is recommended in recent versions
    .then(() => {
      console.log('Connection to MongoDB successful');
      return app.listen({ port: 4001 });
    })
    .then((res) => {
      console.log(`Server running at http://:4001${server.graphqlPath}`);
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB or starting server:', error);
    });
}

startServer();
