const {
    GraphQLObjectType,
    GraphQLFieldConfig
} = require("graphql");

module.exports = class OsrsboxDbObjectType extends GraphQLObjectType {
    constructor(obj) {
        let fields = {};
        for (const [key, value] of Object.entries(obj.fields)) {
            if (value.type && value.resolve){
                fields[key] = {
                    type: value.type,
                    resolve: value.resolve
                }
            } else {
                fields[key] = {
                    type: value,
                    resolve: (json) => json[key]
                };
            }
        }
        super({
            name: obj.name,
            description: obj.description,
            fields: () => (fields)
        });
    }
}