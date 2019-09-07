const ContainerItemType = require("./ContainerItem");
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
        inventory: {
            type: new GraphQLList(ContainerItemType),
            resolve: (obj, args, context) =>
                obj.inventory.map((val) => context.itemLoader.load(val.item).then((item) => {
                    item.slot = val.slot;
                    return item;
                }))
        },
        equipment: {
            type: new GraphQLList(ContainerItemType),
            resolve: (obj, args, context) =>
                obj.equipment.map((val) => context.itemLoader.load(val.item).then((item) => {
                    item.slot = val.slot;
                    return item;
                }))
        }
    })
});