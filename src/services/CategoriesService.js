import Category from '../models/Category'
import BaseService from './BaseService'

export default class CategoriesService extends BaseService {
  constructor() {
    super(Category)
  }

  get(where = {}) {
    return this.model.findOne(where).populate('products')
  }
}
