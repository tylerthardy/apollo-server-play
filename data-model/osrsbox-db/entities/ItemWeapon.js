const OsrsboxDbObjectType = require("../OsrsboxDbObjectType");
const { GraphQLInt, GraphQLString } = require("graphql");
const ItemWeapon = new OsrsboxDbObjectType({
    name: "ItemWeapon",
    description: "A select number of items in OSRS are equipable weapons. Any equipable item that is a weapon has additional properties stored as an ItemWeapon object including attributes such as attack_speed and weapon_types values. The ItemWeapon object is nested within an ItemDefinition under the weapon key. Additionally, each weapon has an array of combat stances associated with it to determine the combat_style, attack_type, attack_style and any bonuses or combat experience association. It is very important to note that not all items in OSRS are equipable weapons. Only items with the equipable_weapon property set to true are equipable. All of the properties available for equipable weapons are listed in the table below including the property name, the data types used, a description of the property and if the property is required to be populated - if not required, the property value can potentially be set to None",
    fields: {
        attack_speed: GraphQLInt,
        weapon_type: GraphQLString,
    }
});

exports.ItemWeapon = ItemWeapon;
