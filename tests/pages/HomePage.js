const { test, expect } = require('@playwright/test')

export class HomePage {
    constructor(page) {
        this.page = page
    }

    async visitPage() {
        await this.page.goto(' https://demo.nopcommerce.com/')
    }

    async searchProduct(product) {
        await this.page.locator('#small-searchterms').fill(product)
        await this.page.locator('button[type="submit"]').click()
    }

    async addToCart() {
        await this.page.getByText('Add to cart').click()
    }
}