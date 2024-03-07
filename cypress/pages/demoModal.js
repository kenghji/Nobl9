/// <reference types ="Cypress"/>
import testData from "../fixtures/testData.json"

export default class demoModal {

    requestDemoIframe = '.go812842568'
    nameField = '#firstname-input'
    lastNameField = '#lastname-input'
    emailField ='#email-input'
    companyField ='#company-input'
    jobTitleField = '#jobtitle-input'
    closeButton = '#interactive-close-button > svg > path'
    reachiFrameBody(){
        return cy.get(this.requestDemoIframe).then(($iframe) => {
           const $body = $iframe.contents().find('body')
           cy.wrap($body).should('be.visible')
       })}
    
    typeName(){
        this.reachiFrameBody().find(this.nameField).type(testData["First name"])
    }
    typeLastName(){
        this.reachiFrameBody().find(this.lastNameField).type(testData["Last name"])
    }
    typeEmail(){
        this.reachiFrameBody().find(this.emailField).type(testData.email)
    }
    typeCompany(){
        this.reachiFrameBody().find(this.companyField).type(testData.company)

    }
    typeJobTitle(){
        this.reachiFrameBody().find(this.jobTitleField).type(testData.job)
    }
    closeModal(){
        this.reachiFrameBody().find(this.closeButton).click()
}}