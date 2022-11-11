import BaseService from './BaseService'
import User from '../models/User'

export default class UserService extends BaseService {
  constructor() {
    super(User)
  }
}
