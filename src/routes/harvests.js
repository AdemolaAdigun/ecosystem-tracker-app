import { Router } from 'express';
import harvestsController from '../controllers/harvests';
import asyncWrapper from '../middleware/asyncWrapper';

const {getHarvest, getGrowbedHarvests, getPondHarvests, createHarvest, updateHarvest, deleteHarvest} = harvestsController;
const router = Router();

router.get(
    '/:id',
    asyncWrapper(getHarvest)
);

router.get(
    '/growbeds/:ecosystemId',
    asyncWrapper(getGrowbedHarvests)
);

router.get(
    '/ponds/:ecosystemId',
    asyncWrapper(getPondHarvests)
);

router.post(
    '/',
    asyncWrapper(createHarvest)
);

router.put(
    '/update/:id',
    asyncWrapper(updateHarvest)
);

router.delete(
    '/delete/:id',
    asyncWrapper(deleteHarvest)
);

export default router;
