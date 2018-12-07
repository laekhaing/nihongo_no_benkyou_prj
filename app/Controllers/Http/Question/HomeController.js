'use strict'

class HomeController {
  async index ({ view }) {
    return view.render('/question/index')
  }
}

module.exports = HomeController
