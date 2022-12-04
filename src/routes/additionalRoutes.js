import { Router } from 'express'
import { authenticateToken } from '../middlewares/authenticate'

const router = Router()

router.route('/ping').get(authenticateToken, (req, res) => {
  res.json({
    message: 'ok',
  })
})

export default router
