const ecosystemSchemaJson = {
    "title": "ecosystemSchema",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id"
        },
        "location": {
            "type": "string",
            "description": "The country name"
        },
        "address": {
            "type": "string",
            "description": "the region"
        },
        "postcode": {
            "type": "string",
            "minimum": 1,
            "description": "the population"
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
    "required": ["location", "address", "postcode"]
};

module.exports = ecosystemSchemaJson;
