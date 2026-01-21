require('dotenv').config()

const { test, expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker')

const token = process.env.BEARER_TOKEN

let userId
let userIdResponse

test.describe.configure({ mode: 'serial' })

test.describe('Automation exercise', () =>{
    test.beforeAll(() =>{
        if (!token) {
            throw new Error('Token not configured!')
        }

        console.log('Tests are starting...')
    })

    test('1. Creating a new user', async ({request}) =>{
        const userPayload = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            gender: faker.helpers.arrayElement(['male', 'female']),
            status: faker.helpers.arrayElement(['active', 'inactive'])
        }

        const headers = {
            'Authorization' : `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        console.log('Creating user: ', userPayload)

        const response = await request.post('/public/v2/users', {
            headers: headers,
            data: userPayload
        })

        expect(response.status()).toBe(201)
        
        const responseBody = await response.json()
        console.log('Created user: ', responseBody)

        userId = responseBody.id
        expect(userId).toBeDefined()
        expect(responseBody.name).toBe(userPayload.name)
        expect(responseBody.email).toBe(userPayload.email)
        expect(responseBody.gender).toBe(userPayload.gender)
        expect(responseBody.status).toBe(userPayload.status)
        
    })

    test('2. Creating a new post', async ({request}) =>{
        const postPayload = {
           title: faker.lorem.sentence(),
           body: faker.lorem.paragraphs(2)
        }

        const headers = {
            'Authorization' : `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        console.log('Creating post: ', postPayload)

        const response = await request.post(`/public/v2/users/${userId}/posts`, {
            headers: headers,
            data: postPayload
        })

        expect(response.status()).toBe(201)
        
        const responseBody = await response.json()
        console.log('Created post: ', responseBody)

        userIdResponse= responseBody.user_id
        expect(userIdResponse).toBeDefined()
        expect(userIdResponse).toBe(userId)
        
    })
})