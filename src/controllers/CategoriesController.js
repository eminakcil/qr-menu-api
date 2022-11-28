import BaseController from './BaseController'
import CategoriesService from '../services/CategoriesService'
import uploadFile from '../scripts/utils/uploadFile'

export default class CategoriesController extends BaseController {
  constructor() {
    super(new CategoriesService())
  }

  insert = async (req, res, next) => {
    const logoPath = await uploadFile(req.files.logo)

    const data = { ...req.body, photo: logoPath }

    this.service
      .insert(data)
      .then((response) => res.status(201).send(response))
      .catch(next)
  }

  edit = async (req, res, next) => {
    const data = { ...req.body }

    if (req.files?.logo) {
      const logoPath = await uploadFile(req.files.logo)
      data.photo = logoPath
    }

    this.service
      .edit(req.params.id, data)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }
}
