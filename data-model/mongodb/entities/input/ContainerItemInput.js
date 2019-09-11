const { GraphQLInt, GraphQLInputObjectType } = require("graphql");

const ContainerItemInput = new GraphQLInputObjectType({
    name: "ContainerItemInput",
    description: "...",
    fields: {
        item: { type: GraphQLInt },
        slot: { type: GraphQLInt },
        quantity: {type: GraphQLInt }
    }
});

exports.ContainerItemInput = ContainerItemInput;
