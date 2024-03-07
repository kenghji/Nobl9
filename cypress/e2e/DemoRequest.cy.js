/// <reference types ="Cypress"/>
import homePage from "../pages/HomePage";
import blogPage from "../Pages/BlogPage";
import demoModal from "../Pages/demoModal";

const homePageElement = new homePage()
const blogPageElement = new blogPage()
const modal = new demoModal()

describe('Request a demo from Noble9 blog', ()=>{ 
    beforeEach(()=> {
        cy.viewport(1280,720)})

    it('Navigates to main page',() => {
        cy.visit('/')
        cy.url().should('eq', 'https://www.nobl9.com/')})

    it('Navigates to the Nobl9 blog page',()=>{
        homePageElement.clickOnResourceMenu()
        homePageElement.clickOnBlogItem()
        cy.url().should('eq', 'https://www.nobl9.com/resources')
    })

    it('Selects first blog item', ()=>{
        blogPageElement.clickLearnMoreButtonOnFirstArticle()})

    it('Opens a demo request form', () => {
        homePageElement.clickRequestDemo()})

    it('Fills the request demo form and closes it', ()=>{
        modal.typeName()
        modal.typeLastName()
        modal.typeEmail()
        modal.typeCompany()
        modal.typeJobTitle()
        modal.closeModal()
        blogPageElement.reachBanner()})})




