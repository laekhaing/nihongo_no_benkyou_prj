'use strict'

class N2QuestionController {
  async kanji_question_01 ({ view }) {
    return view.render('/question/n2_kanji_question_01')
  }

  async kanji_question_02 ({ view }) {
    return view.render('/question/n2_kanji_question_02')
  }

  async grammar_question_01 ({ view }) {
    return view.render('/question/n2_grammar_question_01')
  }

  async grammar_question_02 ({ view }) {
    return view.render('/question/n2_grammar_question_02')
  }


}

module.exports = N2QuestionController
