import { Router } from 'express'

import UserRoutes from './User'
import CategoryRoutes from './Category'
import ProductRoutes from './Product'

import additionalRoutes from './additionalRoutes'

const router = Router()

router.use('/users', UserRoutes)
router.use('/categories', CategoryRoutes)
router.use('/products', ProductRoutes)

router.use(additionalRoutes)

export default router
