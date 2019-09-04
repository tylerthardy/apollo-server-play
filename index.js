const { ApolloServer } = require('apollo-server');
const schema = require("./schema");
const fetch = require("node-fetch")
const DataLoader = require('dataloader');

// Connect to mongo db
require("./data-model/mongodb/connector");

const fetchItem = id => fetch(`https://www.osrsbox.com/osrsbox-db/items-json/${id}.json`)
    .then(response => response.json());
const itemLoader = new DataLoader(ids => Promise.all(ids.map(fetchItem)));

const context = {
    itemLoader
};

const server = new ApolloServer({
  schema: schema,
  context: context
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});