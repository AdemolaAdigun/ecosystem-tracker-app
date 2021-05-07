import { Router } from 'express';
import ecosystemsController from '../controllers/ecosystems';
import asyncWrapper from '../middleware/asyncWrapper';

const {getEcosystem, getEcosystemGrowBedsGeneratedRevenues, getEcosystemPondsGeneratedRevenues, getEcosystems, createEcosystem, updatedEcosystem,
    deleteEcosystem, getGrowbedsRevenue } = ecosystemsController;

const router = Router();

router.get(
    '/:id',
    asyncWrapper(getEcosystem)
);

router.get(
  '/growbeds-revenues/:id',
    asyncWrapper(getEcosystemGrowBedsGeneratedRevenues)
);

router.get(
    '/ponds-revenues/:id',
    asyncWrapper(getEcosystemPondsGeneratedRevenues)
);

router.get(
    '/',
    asyncWrapper(getEcosystems)
);

router.post(
    '/',
    asyncWrapper(createEcosystem)
);

router.put(
    '/update/:id',
    asyncWrapper(updatedEcosystem)
);

router.delete(
    '/delete/:id',
    asyncWrapper(deleteEcosystem)
);

export default router;
