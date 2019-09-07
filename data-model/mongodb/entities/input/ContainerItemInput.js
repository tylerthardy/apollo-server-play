const { GraphQLInt, GraphQLInputObjectType } = require("graphql");

const ContainerItemInput = new GraphQLInputObjectType({
    name: "ContainerItemInput",
    description: "...",
    fields: {
        item: { type: GraphQLInt },
        slot: { type: GraphQLInt }
    }
});

exports.ContainerItemInput = ContainerItemInput;
