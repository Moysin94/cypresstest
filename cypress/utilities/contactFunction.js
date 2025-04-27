import contactPage from '../pageObject/contactPage.json'
import contactUsFormData from '../fixtures/contactUsFormData.json'

//Contact form function
export function contact(){
  cy.get(contactPage.contactButton).click()
  cy.get(contactPage.name).type(contactUsFormData.name)
  cy.get(contactPage.email).type(contactUsFormData.email)
  cy.get(contactPage.subject).type(contactUsFormData.subject)
  cy.get(contactPage.message).type(contactUsFormData.message)
  //cy.get(contactPage.uploadfileButton).attachFile('samplefile.txt'); //uploading file from fixtures folder
  cy.get(contactPage.submitButton).click()
  cy.on('window:confirm', (confirmText) => {
      // Assertion confirm text
      expect(contactUsFormData.confirmText).to.eq(contactUsFormData.confirmText)

      // Automatically clicks 'OK' with true and 'Cancel' with false
      return true
  });
  cy.get(contactPage.successMessage).should('have.text', contactUsFormData.contactFormSuccessMessage)
}