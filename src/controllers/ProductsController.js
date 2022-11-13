import BaseController from './BaseController'
import ProductsService from '../services/ProductsService'

export default class ProductsController extends BaseController {
  constructor() {
    super(new ProductsService())
  }
}
