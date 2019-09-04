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



/*

let obj = {};

function OsrsDbObjectType(obj) {
    this.obj = obj;
}

function constructGraphQLObject () {
    let graphQLObject = {};

    for (const [key, value] of Object.entries(this.obj)) {
        graphQLObject = new GraphQLFieldConfig(
            { type: value, resolve: (json) => json[key] }
        )
    }
}

module.exports = new OsrsDbObjectType({
    name: "Item",
    description: "An ItemDefinition object type includes basic item metadata such as id, name, examine text, store cost, high_alch and low_alch values and quest_item association. Every item object in the item database. All of the properties available are listed in the table below including the property name, the data types used, a description of the property and if the property is required to be populated - if not required, the property value can potentially be set to None.",

    fields: () => (constructGraphQLObject())
});
*/