const {
    GraphQLObjectType,
    GraphQLString
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: "Activity",
    description: "...",
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (obj) => obj.name
        },
        type: {
            type: GraphQLString,
            resolve: (obj, args, context) => context.mongodb.ActivityType.findById(obj.activityTypeId).exec().then(res => res.name)
        }
    })
});