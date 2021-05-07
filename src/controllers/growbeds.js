import { config } from 'dotenv';
import Models from '../models';
import xml from "object-to-xml";
import libxml from 'libxmljs2';
import growbedsSchema from '../database/schemas/json/growbeds_schema_json.js';
import growbedsSchemaXsd from '../database/schemas/xsd/growbeds_schema_xsd.js';
import asyncForEach from "../middleware/asyncForEach";
import { isJsonValid } from '../middleware/validationLogic';
config();

const {
    Growbeds,
} = Models;
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();
validator.addSchema(growbedsSchema);
const xsdDocument = libxml.parseXmlString(growbedsSchemaXsd);

export default {
    getGrowbed: async (request, response) => {
        const {id} = request.params;
        const growbed = await Growbeds.findByPk(id);
        if (request.get('Content-Type') === 'application/json') {
            return response.status(200).json({
                growbed,
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({growbed: growbed.dataValues}));
        }
    },

    getGrowbeds: async (request, response) => {
        const { ecosystemId } = request.params;
        const growbeds = await Growbeds.findAll({ where: { ecosystemId }});
        if (request.get('Content-Type') === 'application/json') {
            return response.status(200).json({
                growbeds,
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            let object = [];
            await asyncForEach(growbeds, async (growbed) => {
                object.push(growbed.dataValues);
            });
            return response.send(xml({growbeds: {growbed: object}}));
        }
    },

    createGrowbed: async (request, response) => {
        const { ecosystemId } = request.params;
        if(request.get('Content-Type') === 'application/json') {
            await isJsonValid(validator, request.body, response);
            await Growbeds.create({
                lightIntensity: request.body.lightIntensity,
                humidity: request.body.humidity,
                pH: request.body.pH,
                water_level: request.body.water_level,
                ecosystemId,
            });
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const lightIntensity = allXmlData.get('//lightIntensity');
            const humidity = allXmlData.get('//humidity');
            const pH = allXmlData.get('//pH');
            const water_level = allXmlData.get('//water_level');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema');
            }

            await Growbeds.create({
                lightIntensity: lightIntensity.text(),
                humidity: humidity.text(),
                pH: pH.text(),
                water_level: water_level.text(),
                ecosystemId: ecosystemId,
            });

            return response.status(200).send(xml({
                message: 'success',
            }));
        }
    },

    updatedGrowbed: async (request, response) => {
        const {ecosystemId, id} = request.params;
        const growbeds = await Growbeds.findOne({
            where: {
                id,
            }
        });
        if(request.get('Content-Type') === 'application/json') {
            await isJsonValid(validator, request.body, response);
            await growbeds.update(request.body, {
                lightIntensity: request.body.lightIntensity,
                humidity: request.body.humidity,
                pH: request.body.pH,
                water_level: request.body.water_level,
                ecosystemId,
            })
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const lightIntensity = allXmlData.get('//lightIntensity');
            const humidity = allXmlData.get('//humidity');
            const pH = allXmlData.get('//pH');
            const water_level = allXmlData.get('//water_level');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }

            await growbeds.update(request.body, {
                lightIntensity: lightIntensity.text(),
                humidity: humidity.text(),
                pH: pH.text(),
                water_level: water_level.text()
            })
            return response.status(200).send(xml({
                message: 'success',
            }));
        }
    },

    deleteGrowbed: async (request, response) => {
        const {ecosystemId, id} = request.params;
        await Growbeds.destroy({
            where: {
                id,
                ecosystemId,
            }
        });
        return response.status(200).json({
            message: 'success',
        });
    },
};
