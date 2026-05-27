# Playwright Test Automation Suite

This repository contains an automated end-to-end (E2E) UI testing suite built using **Playwright** and **TypeScript**. It is configured to run tests across multiple browser engines (Chromium, Firefox, and WebKit) to verify the behavior of local and live web applications.

---

## Features

- **Cross-Browser Testing**: Configured for Chromium (Chrome), Firefox, and WebKit (Safari).
- **Local Application Testing**: Includes tests to verify user creation flows in local environments (e.g., React apps running on `http://localhost:5173`).
- **Live Platform Testing**: Includes automated flows for logging in and dynamically creating employees on the SwarmERP platform.
- **Dynamic Data Generation**: Avoids conflicts by generating unique text strings and numbers for forms using timestamps.

---

## Getting Started

Follow these steps to set up and run the tests on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes pre-packaged with Node.js)

### Installation

1. **Install Node dependencies**:
   Open a terminal in the project root directory (`Ai-Tests`) and run:
   ```bash
   npm install
   ```

2. **Install Playwright browsers**:
   Playwright requires specific browser binaries to run tests. Download and install them by running:
   ```bash
   npx playwright install
   ```

---

## Running the Tests

You can run the tests in different modes depending on your needs.

### 1. Run all tests (headless mode)
Runs all tests across all configured browsers in the background.
```bash
npx playwright test
```

### 2. Run tests in Headed Mode
Runs tests visibly so you can watch the browser actions happen step-by-step.
```bash
npx playwright test --headed
```

### 3. Run a specific test file
To run only a specific test suite, specify the path to the test file:
```bash
npx playwright test tests/add-user.spec.ts
```

### 4. Open Playwright UI Mode
Launches a rich interactive test runner interface. This is highly recommended for writing and debugging tests.
(Recommended)
```bash
npx playwright test --ui 
```

### 5. View Test Reports
After a test run completes, Playwright generates a detailed HTML report. To open it in your browser, run:
```bash
npx playwright show-report
```

---

## Project Structure

```text
├── tests/
│   ├── add-user.spec.ts          # Tests for local React user creation form
│   └── swarmerp-login.spec.ts    # E2E test for the SwarmERP application flow
├── playwright.config.ts          # Global configuration for Playwright
├── package.json                  # Project metadata and dependencies
└── README.md                     # This file
```
