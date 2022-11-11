import { Router } from 'express'

import UserRoutes from './User'

const router = Router()

router.use('/user', UserRoutes)

export default router
