# QA Automation Testing - API & E2E

Automated testing project using Playwright for API and End-to-End testing.

---

## Overview

This project demonstrates test automation capabilities including:
- API Testing with REST endpoints
- End-to-End Testing with UI interactions
- Page Object Model design pattern
- Dynamic test data generation

---

## Prerequisites

- Node.js 18 or higher
- npm (included with Node.js)
- Git

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/VictorBitancourt/interview.git
cd interview
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## Configuration

Create a `.env` file in the root directory:

```
BEARER_TOKEN=your-bearer-token-here
```

**How to get the Bearer Token:**
1. Navigate to https://gorest.co.in
2. Sign in with Google/GitHub
3. Copy the provided Bearer Token
4. Add it to your `.env` file

---

## Running Tests

### API Tests
```bash
npm run api
```

### E2E Tests
```bash
npm run e2e
```

### All Tests
```bash
npx playwright test
```

### View Report
```bash
npx playwright show-report
```

---

## Test Design

### API Testing (tests/api/api.spec.js)

**Test 1: Create User**
- Endpoint: `POST /public/v2/users`
- Validates: Status 201, user data matches payload
- Uses dynamic data with Faker.js

**Test 2: Create Post**
- Endpoint: `POST /public/v2/users/{userId}/posts`
- Validates: Status 201, post associated with user
- Depends on: User ID from Test 1

**Design Decisions:**
- Tests run in serial mode (sequential execution)
- Shared variables store data between tests
- Bearer token validated before execution
- Dynamic data prevents conflicts

### E2E Testing (tests/e2e/e2e.spec.js)

**Test: Navigation and Product Search**
- Application: https://demo.nopcommerce.com/
- Steps: Navigate > Search "Apple MacBook Pro" > Add to cart
- Pattern: Page Object Model

**Page Objects:**
- `HomePage.js` - Encapsulates page interactions

---

## Project Structure

```
interview/
├── tests/
│   ├── api/
│   │   └── api.spec.js       # API tests
│   ├── e2e/
│   │   └── e2e.spec.js       # E2E tests
│   └── pages/
│       └── HomePage.js       # Page Object
├── .env                      # Environment variables (gitignored)
├── .gitignore
├── package.json
├── playwright.config.js      # Test configuration
└── README.md
```

