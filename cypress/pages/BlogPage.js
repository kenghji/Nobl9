/// <reference types ="Cypress"/>

export default class blogPage{
    
    learnMoreButton = '.blog-index__post-button'
    banner = '.blog-post_featured-img-bg > img'
    clickLearnMoreButtonOnFirstArticle(){
    cy.get(this.learnMoreButton).contains("Learn More").first().click()
}
    reachBanner(){
        cy.get(this.banner).should('be.visible')
    }

}

