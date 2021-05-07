import {config} from 'dotenv';
import Models from '../models';
import xml from "object-to-xml";
import ecosystemSchema from "../database/schemas/json/ecosystems_schema_json";

config();

const {
    Ponds,
} = Models;

//for validating json schema
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();

//for validating xml schema
import libxml from 'libxmljs2';

//importing the ecosystemSchema and adding
import pondsSchema from '../database/schemas/json/ponds_schema_json.js';
validator.addSchema(pondsSchema);

import pondsSchemaXsd from '../database/schemas/xsd/ponds_schema_xsd.js';

const xsdDocument = libxml.parseXmlString(pondsSchemaXsd);

export default {
    getPond: async (request, response) => {
        const {id} = request.params;
        const pond = await Ponds.findByPk(id);
        if (request.get('Content-Type') === 'application/json') {
            return response.status(200).json({
                pond,
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({pond}))
        }
    },

    getPonds: async (request, response) => {
        const ponds = await Ponds.findAll();
        if (request.get('Content-Type') === 'application/json') {
            return response.status(200).json({
                ponds,
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({ponds}))
        }
    },

    createPond: async (request, response) => {
        const { temperature, water_level, pH } = request.body;
        const { ecosystemId } = request.params;
        if (request.get('Content-Type') === 'application/json') {
            // using try catch to validate
            try {
                validator.validate(request.body, pondsSchema, {throwError: true})
            } catch (error) {
                return response.status(401).end('Body of json is not valid with schema: ' + error.message);
            }
            await Ponds.create({
                temperature,
                water_level,
                pH,
                ecosystemId,
            });
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const temperature = allXmlData.get('//temperature');
            const water_level = allXmlData.get('//water_level');
            const pH = allXmlData.get('//pH');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }
            await Ponds.create(request.body, {
                temperature: temperature.text(),
                water_level: water_level.text(),
                pH: pH.text(),
            });
            return response.status(200).json({
                message: 'success',
            });
        }
    },

    updatePond: async (request, response) => {
        const {id} = request.params;
        const ponds = await Ponds.findOne({
            where: {
                id,
            }
        });
        if (request.get('Content-Type') === 'application/json') {
            //using try catch to validate
            try {
                validator.validate(request.body, pondsSchema, {throwError: true})
            } catch (error) {
                return response.status(401).end('Body of json is not valid with schema: ' + error.message);
            }
            await ponds.update(request.body, {
                fields: Object.keys(request.body),
            })
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const temperature = allXmlData.get('//temperature');
            const water_level = allXmlData.get('//water_level');
            const pH = allXmlData.get('//pH');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }

            await Ponds.create(request.body, {
                temperature: temperature.text(),
                water_level: water_level.text(),
                pH: pH.text(),
            });

            return response.status(200).json({
                message: 'success',
            });
        }
    },

    deletePond: async (request, response) => {
        const {id} = request.params;
        await Ponds.destroy({
            where: {
                id,
            }
        });
        return response.status(200).json({
            message: 'success',
        });
    },
};
