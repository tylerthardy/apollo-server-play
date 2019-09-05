const { ItemEquipment } = require("./ItemEquipment");
const { ItemWeapon } = require("./ItemWeapon");

const OsrsboxDbObjectType = require("../OsrsboxDbObjectType");
const {
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLString
} = require("graphql");

module.exports = new OsrsboxDbObjectType({
    name: "Item",
    description: "An ItemDefinition object type includes basic item metadata such as id, name, examine text, store cost, high_alch and low_alch values and quest_item association. Every item object in the item database. All of the properties available are listed in the table below including the property name, the data types used, a description of the property and if the property is required to be populated - if not required, the property value can potentially be set to None.",
    fields: {
        id: GraphQLInt,
        name: GraphQLString,
        members: GraphQLBoolean,
        tradeable: GraphQLBoolean,
        tradeable_on_ge: GraphQLBoolean,
        stackable: GraphQLBoolean,
        noted: GraphQLBoolean,
        noteable: GraphQLBoolean,
        linked_id_item: GraphQLInt,
        linked_id_noted: GraphQLInt,
        linked_id_placeholder: GraphQLInt,
        placeholder: GraphQLBoolean,
        equipable: GraphQLBoolean,
        equipable_by_player: GraphQLBoolean,
        equipable_weapon: GraphQLBoolean,
        cost: GraphQLInt,
        lowalch: GraphQLInt,
        highalch: GraphQLInt,
        weight: GraphQLFloat,
        buy_limit: GraphQLInt,
        quest_item: GraphQLBoolean,
        release_date: GraphQLString,
        duplicate: GraphQLBoolean,
        examine: GraphQLString,
        wiki_name: GraphQLString,
        wiki_url: GraphQLString,
        equipment: { type: ItemEquipment, resolve: (json) => json.equipment },
        weapon: { type: ItemWeapon, resolve: (json) => json.weapon },
        icon_url: { type: GraphQLString, resolve: (json) => `https://www.osrsbox.com/osrsbox-db/items-icons/${json.id}.png` }
    }
});