/// <reference types ="Cypress"/>

export default class homePage{
    
    resourcesMenu = ':nth-child(5) > .nobl9__mega-menu--link > .nobl9__mega-menu--link-title > #hs_cos_wrapper_module_16639154864387_'
    blogItem = '.nobl9__mega-menu--sub-wrapper > [data-related-link="https://www.nobl9.com/resources"]'
    demoButton = '#header-trial'

    clickOnResourceMenu(){
        cy.get(':nth-child(5) > .nobl9__mega-menu--link > .nobl9__mega-menu--link-title > #hs_cos_wrapper_module_16639154864387_').click()
    }
    clickOnBlogItem(){
        cy.get(this.blogItem).click()
    }

    clickRequestDemo(){
        cy.get(this.demoButton).click()
    }
    

}