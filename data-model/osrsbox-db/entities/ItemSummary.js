const OsrsboxDbObjectType = require("../OsrsboxDbObjectType");
const {
    GraphQLInt,
    GraphQLString
} = require("graphql");

module.exports = new OsrsboxDbObjectType({
    name: "ItemSummary",
    description: "A single JSON file that contains only the item names and item ID numbers. This file is useful when you want to download a small file (1.1MB) to quickly scan/process item data when you only need the item name and/or ID number.",
    fields: {
        id: GraphQLInt,
        name: GraphQLString
    }
});