export const isJsonValid = async (validator, body, schema, response) => {
    try {
        validator.validate(body, schema, {throwError: true})
    } catch (error) {
        return response.status(401).end('Body of json is not valid with schema: ' + error.message);
    }
}

export const isXmlValid = async () => {

};



