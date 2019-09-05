const ItemType = require("./data-model/osrsbox-db/entities/Item");
const ItemSummaryType = require("./data-model/osrsbox-db/entities/ItemSummary");
const LoadoutType = require("./data-model/mongodb/entities/Loadout");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
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
            items: {
                type: new GraphQLList(ItemType),
                args: {
                    name: { type: GraphQLString }
                },
                resolve: (root, args, context) => context.fetchItemSummary(args.name).then((items) => context.itemLoader.loadMany(items.map(x => x.id)))
            },
            loadout: {
                type: LoadoutType,
                args: {
                    _id: { type: GraphQLString }
                },
                resolve: (root, args, context) =>
                    Promise.resolve(context.mongodb.Loadout.findById(args._id))
            },
            loadouts: {
                type: new GraphQLList(LoadoutType),
                args: {
                    name: { type: GraphQLString },
                    items: { type: new GraphQLList(GraphQLInt) },
                },
                resolve: (root, args, context) =>
                    Promise.resolve(context.mongodb.Loadout.find(args))
            }
        })
    }),
    mutation: new GraphQLObjectType({
        name: "Mutations",
        description: "Mutations layer",

        fields: () => ({
            addLoadout: {
                type: LoadoutType,
                args: {
                    name: { type: GraphQLString },
                    items: { type: new GraphQLList(GraphQLInt)}
                },
                resolve: (root, args, context) => Promise.resolve(new context.mongodb.Loadout(args).save())
            }
        })
    })
});