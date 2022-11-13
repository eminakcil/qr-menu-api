import { Router } from 'express'
import CategoriesController from '../controllers/CategoriesController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Category'

const router = Router()
const controller = new CategoriesController()

router.route('/').get(authenticateToken, controller.list)
router.route('/').post(authenticateToken, validate(createValidation), controller.insert)

export default router
