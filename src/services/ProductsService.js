import Product from '../models/Product'
import BaseService from './BaseService'

export default class ProductsService extends BaseService {
  constructor() {
    super(Product)
  }

  get(where = {}) {
    return this.model.findOne(where).populate('category')
  }
}
