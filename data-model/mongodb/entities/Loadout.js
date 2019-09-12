const ContainerItemType = require("./ContainerItem");
const ActivityType = require("./Activity");
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
        activity: {
            type: ActivityType,
            resolve: (obj, args, context) => {
                if (!obj.activityId) return null;
                return context.mongodb.Activity.findById(obj.activityId).exec().then((res) => res);
            }
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