import {Router} from 'express';
import ecosystemsRoutes from './ecosystems';
import growBedsRoutes from './growbeds';
import harvestsRoutes from './harvests';
import pondsRoutes from './ponds';

const router = Router();

router.use('/ecosystems', ecosystemsRoutes);
router.use('/', growBedsRoutes);
router.use('/', pondsRoutes);
router.use('/harvests', harvestsRoutes);

export default router;
