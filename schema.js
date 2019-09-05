const ItemType = require("./data-model/osrsbox-db/entities/Item");
const LoadoutType = require("./data-model/mongodb/entities/Loadout");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString
} = require("graphql");

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "Query layer",

        fields: () => ({
            item: {
                type: ItemType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: (root, args, context) => context.itemLoader.load(args.id)
            },
            loadout: {
                type: LoadoutType,
                args: {
                    _id: { type: GraphQLString }
                },
                resolve: (root, args, context) => context.mongodb.Loadout.findById(args._id)
            }
        })
    })
});