import {config} from 'dotenv';
import Models from '../models';
import xml from 'object-to-xml';
import ecosystemSchemaXsd from '../database/schemas/xsd/ecosystems_schema_xsd.js';
import asyncForEach from "../middleware/asyncForEach";
import ecosystemSchema from '../database/schemas/json/ecosystems_schema_json.js';
import libxml from 'libxmljs2';
import {isJsonValid} from '../middleware/validationLogic';
import {request, response} from "express";
import ecosystems from "../routes/ecosystems";

config();
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();
validator.addSchema(ecosystemSchema);
const xsdDocument = libxml.parseXmlString(ecosystemSchemaXsd);
const {
    Ecosystems,
    Ponds,
    Growbeds,
    Harvests
} = Models;

export default {
    getEcosystem: async (request, response) => {
        const {id} = request.params;
        const ecosystem = await Ecosystems.findByPk(id);
        if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({ecosystem: ecosystem.dataValues}));
        }
        return response.status(200).json({
            ecosystem,
        });
    },

    getEcosystemGrowBedsGeneratedRevenues: async (request, response) => {
        const {id} = request.params;
        const growbeds = await Growbeds.findAll({where: {ecosystemId: id}});
        const revenues = [];
        await asyncForEach(growbeds, async (growbed) => {
            const {harvestId} = growbed.dataValues;
            const harvest = await Harvests.findOne({ where: { id: harvestId }, attributes : {
                exclude : ['id', 'createdAt', 'updatedAt'],
                }});
            revenues.push(harvest.dataValues);
        });
        if (request.get('Content-Type') === 'application/xml') {
            return response.status(200).send(xml({
                revenues,
            }));
        }
        return response.status(200).json({
            revenues,
        });
    },

    getEcosystemPondsGeneratedRevenues: async (request, response) => {
        const {id} = request.params;
        const ponds = await Ponds.findAll({where: {ecosystemId: id}});
        const revenues = [];
        await asyncForEach(ponds, async (pond) => {
            const {harvestId} = pond.dataValues;
            const harvest = await Harvests.findOne({ where: { id: harvestId }, attributes : {
                    exclude : ['id', 'createdAt', 'updatedAt'],
                }});
            revenues.push(harvest.dataValues);
        });
        if (request.get('Content-Type') === 'application/xml') {
            return response.status(200).send(xml({
                revenues,
            }));
        }
        return response.status(200).json({
            revenues,
        });
    },

    getEcosystems: async (request, response) => {
        const ecosystems = await Ecosystems.findAll();
        if (request.get('Content-Type') === 'application/xml') {
            let object = [];
            await asyncForEach(ecosystems, async (ecosystem) => {
                object.push(ecosystem.dataValues);
            });
            return response.send(xml({ecosystems: {ecosystem: object}}));
        }
        return response.status(200).json({
            ecosystems,
        });
    },

    createEcosystem: async (request, response) => {
        if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const location = allXmlData.get('//location');
            const address = allXmlData.get('//address');
            const postcode = allXmlData.get('//postcode');
            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }
            await Ecosystems.create({
                location: location.text(),
                address: address.text(),
                postcode: postcode.text()
            });
            return response.status(200).send(xml({
                message: 'success',
            }));
        }
        await isJsonValid(validator, request.body, ecosystemSchema);
        await Ecosystems.create(request.body, {
            fields: Object.keys(request.body),
        });
        return response.status(200).json({
            message: 'success',
        });
    },

    updatedEcosystem: async (request, response) => {
        const {id} = request.params;
        const ecosystem = await Ecosystems.findOne({
            where: {
                id,
            }
        });
        if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const location = allXmlData.get('//location');
            const address = allXmlData.get('//address');
            const postcode = allXmlData.get('//postcode');
            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }
            await ecosystem.update({
                location: location.text(),
                address: address.text(),
                postcode: postcode.text(),
            });
            return response.status(200).json({
                message: 'success',
            });
        }
        await isJsonValid(validator, request.body, ecosystemSchema);
        await ecosystem.update(request.body, {
            fields: Object.keys(request.body),
        });
        return response.status(200).json({
            message: 'success',
        });
    },

    deleteEcosystem: async (request, response) => {
        const {id} = request.params;
        await Ecosystems.destroy({
            where: {
                id,
            }
        });
        return response.status(200).json({
            message: 'success',
        });
    },
};
