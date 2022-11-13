import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Product'

const router = Router()
const controller = new ProductsController()

router.route('/').get(authenticateToken, controller.list)
router.route('/').post(authenticateToken, validate(createValidation), controller.insert)

export default router
