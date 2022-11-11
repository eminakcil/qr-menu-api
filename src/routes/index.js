import { Router } from 'express'

import UserRoutes from './User'

const router = Router()

router.use('/users', UserRoutes)

export default router
