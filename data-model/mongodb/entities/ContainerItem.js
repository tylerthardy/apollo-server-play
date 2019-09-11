const ItemType = require("../../osrsbox-db/entities/Item");
const {
    GraphQLObjectType,
    GraphQLInt
} = require("graphql");

const ContainerItemConfig = ItemType.toConfig();
ContainerItemConfig.name = "ContainerItem";
ContainerItemConfig.description = "...";
ContainerItemConfig.fields.slot = { type: GraphQLInt, resolve: (json) => json.slot };
ContainerItemConfig.fields.quantity = { type: GraphQLInt, resolve: (json) => json.quantity };

module.exports = new GraphQLObjectType(ContainerItemConfig);