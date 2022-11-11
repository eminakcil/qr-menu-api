import { Router } from 'express'
import UsersController from '../controllers/UsersController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/User'

const router = Router()
const controller = new UsersController()

router.get('/', controller.list)
router.route('/').post(validate(createValidation), controller.insert)

export default router
