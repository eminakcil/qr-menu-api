export default class BaseService {
  constructor(model) {
    this.model = model
  }

  insert(data) {
    return this.model(data).save()
  }

  list(where = {}) {
    return this.model.find(where)
  }

  delete(id) {
    return this.model.deleteOne({ id })
  }

  get(where = {}) {
    return this.model.findOne(where)
  }
}
