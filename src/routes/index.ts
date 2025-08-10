import { Router } from 'express';
import homeRoutes from './home';
import contactRoutes from './contact';
import blogRoutes from './blog';
import careerRoutes from './career';
import staticRoutes from './static';

const router = Router();

// Mount routes
router.use('/', homeRoutes);
router.use('/contact', contactRoutes);
router.use('/blog', blogRoutes);
router.use('/blogs', blogRoutes);
router.use('/careers', careerRoutes);
router.use('/', staticRoutes);

export default router;
