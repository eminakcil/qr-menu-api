import Category from '../models/Category'
import BaseService from './BaseService'

export default class CategoriesService extends BaseService {
  constructor() {
    super(Category)
  }
}
