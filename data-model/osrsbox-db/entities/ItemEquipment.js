const OsrsboxDbObjectType = require("../OsrsboxDbObjectType");
const { GraphQLInt, GraphQLString } = require("graphql");

const ItemEquipment = new OsrsboxDbObjectType({
    name: "ItemEquipment",
    description: "Many items in OSRS are equipable, this includes armor, weapons, and other wearable items. Any equipable item has additional properties stored as an ItemEquipment object including attributes such as attack_slash, defence_crush and melee_strength values. The ItemEquipment object is nested within an ItemDefinition under the equipment key. It is very important to note that not all items in OSRS are equipable. Only items with the equipable_by_player property set to true are equipable. The equipable property is similar, but this is the raw data extracted from the game cache - and can sometimes be incorrect (not equipable by a player). All of the properties available for equipable items are listed in the table below including the property name, the data types used, a description of the property and if the property is required to be populated - if not required, the property value can potentially be set to None.",
    fields: {
        attack_stab: GraphQLInt,
        attack_slash: GraphQLInt,
        attack_crush: GraphQLInt,
        attack_magic: GraphQLInt,
        attack_ranged: GraphQLInt,
        defence_stab: GraphQLInt,
        defence_slash: GraphQLInt,
        defence_crush: GraphQLInt,
        defence_magic: GraphQLInt,
        defence_ranged: GraphQLInt,
        melee_strength: GraphQLInt,
        ranged_strength: GraphQLInt,
        magic_damage: GraphQLInt,
        prayer: GraphQLInt,
        slot: GraphQLString
        //requirements: dict[skill, level]
    }
});

exports.ItemEquipment = ItemEquipment;