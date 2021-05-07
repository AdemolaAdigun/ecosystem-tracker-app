const pondSchemaJson = {
    "title": "pondSchema",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id"
        },
        "water_level": {
            "type": "integer",
            "description": "The water level"
        },
        "pH": {
            "type": "integer",
            "description": "the pH",
            "maximum": 10,
            "minimum": 1,
        },
        "temperature": {
            "type": "integer",
            "minimum": 20,
            "maximum": 100,
            "description": "the temperature"
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
    "required": ["water_level", "pH", "temperature"]
};

module.exports = pondSchemaJson;
