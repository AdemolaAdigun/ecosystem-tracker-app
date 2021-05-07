const harvestSchemaJson = {
    "title": "harvestSchema",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id"
        },
        "harvestSize": {
            "type": "integer",
            "description": "The harvest size"
        },
        "revenue": {
            "type": "integer",
            "description": "the revenue"
        },
        "createdAt": {
            "type": "string",
            "description": "the creation time"
        },
        "updatedAt": {
            "type": "string",
            "description": "the updated time"
        }

    },
    "required": ["harvestSize", "revenue"]
};

module.exports = harvestSchemaJson;
