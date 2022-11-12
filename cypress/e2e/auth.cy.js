import LoginPage from "../pages/login.page";
import ProfilePage from '../pages/app/profile.page'

describe('Authentication', () => {

  beforeEach(() => {
    LoginPage.open()
  })


  it('1. Sign in with valid credentials', () => {

    LoginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))

    ProfilePage.iconAvatar.should('be.visible')
    cy.location('pathname')
      .should('include', 'profile')
  })

  it('2. Sign in with invalid credentials', () => {

    LoginPage.login(Cypress.env('EMAIL'), '123456')

    LoginPage.toast.should('have.text', 'Auth failed')


  })

  it('3. Credentials validation', () => {

    LoginPage.inputEmail.type('test@')

    LoginPage.emailValidation
      .should('have.text', '\'email\' is not a valid email')

    LoginPage.inputEmail.clear()

    LoginPage.emailValidation
      .should('have.text', 'Required')

    LoginPage.inputPassword
      .type('test')
      .clear()

    LoginPage.passwordValidation
      .should('have.text', 'Required')

  })
})
