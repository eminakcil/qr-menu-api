import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import {
  createValidationBody,
  createValidationFile,
  editValidationBody,
  editValidationFile,
} from '../validations/Product'

const router = Router()
const controller = new ProductsController()

router.route('/').get(controller.list)
router.route('/:id').get(controller.getById)
router
  .route('/')
  .post(
    authenticateToken,
    validate(createValidationBody),
    validate(createValidationFile, 'files'),
    controller.insert
  )

router
  .route('/:id/edit')
  .patch(
    authenticateToken,
    validate(editValidationBody),
    validate(editValidationFile, 'files'),
    controller.edit
  )

export default router
