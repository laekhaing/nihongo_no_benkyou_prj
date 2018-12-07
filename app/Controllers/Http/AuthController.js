'use strict'

const { validateAll } = use('Validator')

class AuthController {
  async login ({ request, response, session, auth }) {
    const rules = {
      login_id: 'required',
      password: 'required'
    }

    // const validation = await validateAll(request.all(), rules, {
    //   'login_id.required': 'ログインIDは必須です',
    //   'password.required': 'パスワードは必須です'
    // })
    // if (validation.fails()) {
    //   session.withErrors(validation.messages())
    //     .flashExcept(['password'])
    //
    //   return response.redirect('back')
    // }

    try {
      const {login_id, password} = request.all()
      console.log("user id ", login_id)
      console.log("password ", password)
      await auth.attempt(login_id, password)
    } catch (e) {
      // ログイン失敗
      console.log("error" , e)
      session.flash({
        error_message: 'ログインIDもしくはパスワードが異なります'
      })
      return response.redirect('back')
    }

    return response.redirect('/question')
  }

  async logout ({ auth, response }) {
    await auth.logout()
    response.redirect('/')
  }
}

module.exports = AuthController
