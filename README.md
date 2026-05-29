// ...existing code...

# Code Review Client

A lightweight Node.js client for interacting with a code-review API. This project contains the client-side code, CLI helpers, and utilities used to submit code, fetch reviews, and display results.

## Features
- Submit code snippets or repositories for review
- Fetch and display review results and comments
- CLI and programmatic usage
- Tests, linting, and build scripts

## Prerequisites
- macOS
- Node.js 24 (recommended)
- npm or yarn

Install Node (macOS):
```bash
brew install node
# or use nvm
```

## Install
```bash
git clone <repo-url>
cd Code_review_client
npm install
```

## Configuration
Create a `.env` file in the project root with required variables:
```
API_URL=https://api.example.com
API_TOKEN=your_token_here
```

## Usage
Run in development mode:
```bash
npm run dev
```
Build for production:
```bash
npm run build
```
Run tests:
```bash
npm test
```

## Scripts
- npm run dev — start development mode
- npm run build — build artifacts
- npm test — run unit tests
- npm run lint — run linters

## Contributing
Fork the repo, create a feature branch, add tests, and open a pull request. Follow coding and commit conventions.

## License
MIT