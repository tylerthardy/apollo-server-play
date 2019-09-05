const { ApolloServer } = require('apollo-server');
const schema = require("./schema");
const fetch = require("node-fetch")
const DataLoader = require('dataloader');

// Connect to mongo db
const mongodb = require("./data-model/mongodb/connector");

const fetchItem = id => fetch(`https://www.osrsbox.com/osrsbox-db/items-json/${id}.json`)
    .then(response => response.json())
    .catch((error) => null);
const itemLoader = new DataLoader(ids => Promise.all(ids.map(fetchItem)));
const fetchItemSummary = (name) => fetch(`https://www.osrsbox.com/osrsbox-db/items-summary.json`)
    .then(response => response.json())
    .then(json => {
      let itemArray = [];
      for(var i in json) {
        itemArray.push(json[i]);
      }
      let nameRegex = new RegExp(name, "i");
      return itemArray.filter(x => x.name.match(nameRegex));
    })
    .catch((error) => null); //TODO: Cache fetched json with ~24 hour expiration on it

const context = {
    itemLoader,
    fetchItemSummary,
    mongodb
};

const server = new ApolloServer({
  schema: schema,
  context: context
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});