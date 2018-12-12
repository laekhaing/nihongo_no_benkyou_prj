'use strict'

class HomeController {
  async index ({ view }) {
    // return view.render('/question/index')
    return view.render('/question/n1_kanji_question_01')
  }
}

module.exports = HomeController
