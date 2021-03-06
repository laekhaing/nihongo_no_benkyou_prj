'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.post('login', 'AuthController.login')

Route.group(() => {
  Route.any('/', 'Question/HomeController.index')
  Route.get('/logout', 'AuthController.logout')
  Route.get('/kanji/n1_kanji_question_01', 'Question/N1QuestionController.kanji_question_01')
  Route.get('/kanji/n1_kanji_question_02', 'Question/N1QuestionController.kanji_question_02')
  Route.get('/kanji/n1_kanji_question_03', 'Question/N1QuestionController.kanji_question_03')
  Route.get('/kanji/n1_kanji_question_04', 'Question/N1QuestionController.kanji_question_04')
  Route.get('/grammar/n1_grammar_question_01', 'Question/N1QuestionController.grammar_question_01')
  Route.get('/grammar/n1_grammar_question_02', 'Question/N1QuestionController.grammar_question_02')
  Route.get('/grammar/n1_grammar_question_03', 'Question/N1QuestionController.grammar_question_03')
  Route.get('/grammar/n1_grammar_question_04', 'Question/N1QuestionController.grammar_question_04')

  Route.get('/kanji/n2_kanji_question_01', 'Question/N2QuestionController.kanji_question_01')
  Route.get('/kanji/n2_kanji_question_02', 'Question/N2QuestionController.kanji_question_02')
  Route.get('/grammar/n2_grammar_question_01', 'Question/N2QuestionController.grammar_question_01')
  Route.get('/grammar/n2_grammar_question_02', 'Question/N2QuestionController.grammar_question_02')
}).middleware('auth').prefix('question')
