import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Product'

const router = Router()
const controller = new ProductsController()

router.route('/').get(controller.list)
router.route('/:id').get(controller.getById)
router.route('/').post(authenticateToken, validate(createValidation), controller.insert)

export default router
