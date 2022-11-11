export default class BaseController {
  /**
   *
   * @param {import('../services/BaseService').default} service
   */
  constructor(service) {
    this.service = service
  }

  list = (req, res, next) => {
    this.service
      .list()
      .then((response) => res.status(200).send(response))
      .catch(next)
  }

  insert = (req, res, next) => {
    this.service
      .insert(req.body)
      .then((response) => res.status(201).send(response))
      .catch(next)
  }

  delete = (req, res, next) => {
    this.service
      .delete(req.body.id)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }

  getById = (req, res, next) => {
    this.service
      .get({ _id: req.params.id })
      .then((response) => res.status(200).send(response))
      .catch(next)
  }
}
