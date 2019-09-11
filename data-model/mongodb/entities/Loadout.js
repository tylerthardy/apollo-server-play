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
            resolve: (obj, args, context) => {
                return obj.inventory.map((val) => context.itemLoader.load(val.item).then((item) => {
                    let out = {};
                    for (const a in item) {
                        if (item.hasOwnProperty(a)) {
                            out[a] = item[a];
                        }
                    }
                    out._id = val._id;
                    out.slot = val.slot;
                    out.quantity = val.quantity;
                    return out;
                }))
            }
        },
        equipment: {
            type: new GraphQLList(ContainerItemType),
            resolve: (obj, args, context) =>
                obj.equipment.map((val) => context.itemLoader.load(val.item).then((item) => {
                    let out = {};
                    for (const a in item) {
                        if (item.hasOwnProperty(a)) {
                            out[a] = item[a];
                        }
                    }
                    out._id = val._id;
                    out.slot = val.slot;
                    out.quantity = val.quantity;
                    return out;
                }))
        }
    })
});