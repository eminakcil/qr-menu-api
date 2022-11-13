import BaseController from './BaseController'
import CategoriesService from '../services/CategoriesService'

export default class CategoriesController extends BaseController {
  constructor() {
    super(new CategoriesService())
  }
}
