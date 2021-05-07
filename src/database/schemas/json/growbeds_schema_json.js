const growbedsSchemaJson = {
    "title": "growbedsSchema",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id"
        },
        "lightIntensity": {
            "type": { "type": "integer"},
            "minimum": 100,
            "maximum": 1500,
            "description": "The lightIntensity"
        },
        "humidity": {
            "type": { "type": "integer"},
            "minimum": 10,
            "maximum": 100,
            "description": "the humidity"
        },
        "pH": {
            "type": { "type": "integer"},
            "minimum": 1,
            "maximum": 10,
            "description": "the pH"
        },
        "water_level": {
            "type": { "type": "integer"},
            "minimum": 0,
            "maximum": 500,
            "description": "the water level"
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
    "required": ["lightIntensity", "humidity", "pH", "water_level"]
};

module.exports = growbedsSchemaJson;
