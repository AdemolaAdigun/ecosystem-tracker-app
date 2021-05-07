
import { Router } from 'express';
import pondsController from '../controllers/ponds';
import asyncWrapper from '../middleware/asyncWrapper';

const {getPond, getPonds, createPond, updatePond, deletePond} = pondsController;
const router = Router();

router.get(
    '/ecosystems/:ecosystemId/ponds/:id',
    asyncWrapper(getPond)
);

router.get(
    '/ecosystems/:ecosystemId/ponds',
    asyncWrapper(getPonds)
);

router.post(
    '/ecosystems/:ecosystemId/ponds',
    asyncWrapper(createPond)
);

router.put(
    '/ecosystems/:ecosystemId/ponds/update/:id',
    asyncWrapper(updatePond)
);

router.delete(
    '/ecosystems/:ecosystemId/ponds/delete/:id',
    asyncWrapper(deletePond)
);

export default router;
