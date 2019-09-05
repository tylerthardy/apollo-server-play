const ItemType = require("../../osrsbox-db/entities/Item");
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLFieldConfig
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "Loadout",
    description: "...",
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: (obj) => obj._id
        },
        name: {
            type: GraphQLString,
            resolve: (obj) => obj.name
        },
        items:  {
            type: new GraphQLList(ItemType),
            resolve: (obj, args, context) => {
                return context.itemLoader.loadMany(obj.items)
                    .then((items) => items.filter((item) => item != null))
            }
        }
    })
});