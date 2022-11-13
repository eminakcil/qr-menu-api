import { Router } from 'express'

import UserRoutes from './User'
import CategoryRoutes from './Category'
import ProductRoutes from './Product'

const router = Router()

router.use('/users', UserRoutes)
router.use('/categories', CategoryRoutes)
router.use('/products', ProductRoutes)

export default router
