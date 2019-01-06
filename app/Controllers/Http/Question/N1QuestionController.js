'use strict'

class N1QuestionController {
  async kanji_question ({ view }) {    
    return view.render('/question/n1_kanji_question')
  }

  async kanji_question_01 ({ view }) {
    return view.render('/question/n1_kanji_question_01')
  }

  async kanji_question_02 ({ view }) {
    return view.render('/question/n1_kanji_question_02')
  }

  async kanji_question_03 ({ view }) {
    return view.render('/question/n1_kanji_question_03')
  }

  async kanji_question_04 ({ view }) {
    return view.render('/question/n1_kanji_question_04')
  }

  async grammar_question ({ view }) {
    return view.render('/question/n1_grammar_question')
  }

  async grammar_question_01 ({ view }) {
    return view.render('/question/n1_grammar_question_01')
  }

  async grammar_question_02 ({ view }) {
    return view.render('/question/n1_grammar_question_02')
  }


}

module.exports = N1QuestionController
