const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/HomePage')

let homePage

test.beforeEach(({page}) =>{
    homePage = new HomePage(page)
})

test('Navigation and Product Search', async () => {
    
   
    await homePage.visitPage()
    await homePage.searchProduct('Apple MacBook Pro')
    await homePage.addToCart()

   
})