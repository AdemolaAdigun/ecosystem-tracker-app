import {config} from 'dotenv';
import Models from '../models';
import xml from "object-to-xml";

config();

const {
    Harvests,
    Growbeds,
    Ponds,
} = Models;

//for validating json schema
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();

//for validating xml schema
import libxml from 'libxmljs2';

//importing the ecosystemSchema and adding
import harvestsSchema from '../database/schemas/json/harvests_schema_json.js';

validator.addSchema(harvestsSchema);

import harvestsSchemaXsd from '../database/schemas/xsd/harvests_schema_xsd.js';

const xsdDocument = libxml.parseXmlString(harvestsSchemaXsd);

export default {
    getHarvest: async (request, response) => {
        const {id} = request.params;
        const harvest = await Harvests.findByPk(id);
        if (request.get('Content-Type') === 'application/json') {
            return response.status(200).json({
                harvest,
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({harvest}))
        }
    },

    getGrowbedHarvests: async (request, response) => {
        const {ecosystemId} = request.params;
        const growbed = await Growbeds.findAll({where: {ecosystemId}});
        const {id} = growbed[0].dataValues;
        const harvests = await Harvests.findAll({where: {growbedId: id}});
        if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({harvests}))
        }
        return response.status(200).json({
            harvests,
        });
    },

    getPondHarvests: async (request, response) => {
        const {ecosystemId} = request.params;
        const pond = await Ponds.findAll({where: {ecosystemId}});
        const {id} = pond[0].dataValues;
        const harvests = await Harvests.findAll({where: {pondId: id}});
        if (request.get('Content-Type') === 'application/xml') {
            return response.send(xml({harvests}))
        }
        return response.status(200).json({
            harvests,
        });
    },

    createHarvest: async (request, response) => {
        if (request.get('Content-Type') === 'application/json') {
            //using try catch to validate
            try {
                validator.validate(request.body, harvestsSchema, {throwError: true})
            } catch (error) {
                return response.status(401).end('Body of json is not valid with schema: ' + error.message);
            }
            await Harvests.create({
                harvestSize: request.body.harvestSize,
                revenue: request.body.revenue,
            });
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const harvestSize = allXmlData.get('//harvestSize');
            const revenue = allXmlData.get('//revenue');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }
            await Harvests.create(request.body, {
                harvestSize: harvestSize.text(),
                revenue: revenue.text()
            });
            return response.status(200).json({
                message: 'success',
            });
        }
    },

    updateHarvest: async (request, response) => {
        const {id} = request.params;
        const harvest = await Harvests.findOne({
            where: {
                id,
            }
        });
        if (request.get('Content-Type') === 'application/json') {
            //using try catch to validate
            try {
                validator.validate(request.body, harvestsSchema, {throwError: true})
            } catch (error) {
                return response.status(401).end('Body of json is not valid with schema: ' + error.message);
            }
            await harvest.update(request.body, {
                harvestSize: request.body.harvestSize,
                revenue: request.body.revenue,
            });
            return response.status(200).json({
                message: 'success',
            });
        } else if (request.get('Content-Type') === 'application/xml') {
            const allXmlData = libxml.parseXmlString(request.body);
            const harvestSize = allXmlData.get('//harvestSize');
            const revenue = allXmlData.get('//revenue');

            if (!allXmlData.validate(xsdDocument)) {
                return response.status(401).end('Body of xml is not valid with schema: ');
            }
            await Harvests.create(request.body, {
                harvestSize: harvestSize.text(),
                revenue: revenue.text()
            });
            return response.status(200).json({
                message: 'success',
            });
        }
    },

    deleteHarvest: async (request, response) => {
        const {id} = request.params;
        await Harvests.destroy({
            where: {
                id,
            }
        });
        return response.status(200).json({
            message: 'success',
        });
    },
};
