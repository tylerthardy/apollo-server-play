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
                    id: {type: GraphQLInt }
                },
                resolve: (_, args) => LoadoutType.find({id: args.id}).exec()
            }
        })
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        description: "Mutation layer",

        fields: () => ({
            addLoadout: {
                type: LoadoutType,
                description: "Create a loadout",
                args: {
                    name: GraphQLNonNull(GraphQLString)
                },
                resolve: (value, args) => {
                    return LoadoutType.create(args);
                }
            }
        })
    })
});