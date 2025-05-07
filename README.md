# Appears Web

A modern web application built with Angular that provides [brief description of what the application does].

## Technologies Used

- **Angular**: Frontend framework using TypeScript for building the single-page application
- **SCSS**: Advanced CSS preprocessor for styling the application
- **Firebase**: Backend as a service platform for:
  - Hosting
- **Node.js**: JavaScript runtime environment
- **GitHub Actions**: CI/CD pipelines for automated testing and deployment

## Project Structure

The project follows standard Angular application structure:

```
src/
  app/             # Application components, services, and modules
  environments/    # Environment-specific configurations
  assets/          # Static assets like images and icons
  styles/          # Global styling files
```

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- Angular CLI

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm start
```

Visit `http://localhost:4200/` to see the application running.

## Deployment

The application is automatically deployed to Firebase Hosting using GitHub Actions when code is merged to the main branch.

## CI/CD

GitHub Actions workflows are configured to:
1. Test the application
2. Build the production bundle
3. Deploy to Firebase hosting