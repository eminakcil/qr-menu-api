import BaseController from './BaseController'
import UsersService from '../services/UsersService'

export default class UsersController extends BaseController {
  constructor() {
    super(new UsersService())
  }
}
