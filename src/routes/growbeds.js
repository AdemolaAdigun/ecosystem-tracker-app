import { Router } from 'express';
import growbedsController from '../controllers/growbeds';
import asyncWrapper from '../middleware/asyncWrapper';

const {createGrowbed, getGrowbed, getGrowbeds, deleteGrowbed, updatedGrowbed} = growbedsController;
const router = Router();

router.get(
    '/ecosystems/:ecosystemId/growbeds/:id',
    asyncWrapper(getGrowbed)
);

router.get(
    '/ecosystems/:ecosystemId/growbeds',
    asyncWrapper(getGrowbeds)
);

router.post(
    '/ecosystems/:ecosystemId/growbeds',
    asyncWrapper(createGrowbed)
);

router.put(
    '/ecosystems/:ecosystemId/growbeds/update/:id',
    asyncWrapper(updatedGrowbed)
);

router.delete(
    '/ecosystems/:ecosystemId/growbeds/delete/:id',
    asyncWrapper(deleteGrowbed)
);

export default router;
