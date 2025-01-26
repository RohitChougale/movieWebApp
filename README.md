Overview
This is a feature-rich Angular application built to showcase my front-end development skills. The application demonstrates a variety of core Angular features, including routing, data binding, and a well-structured, scalable codebase. It has been designed with best practices in mind to ensure maintainability and performance.

Features:
    🔹 Routing -
              Implemented Angular routing for seamless navigation between different views.
              Used route guards to secure specific sections of the application.
              Lazy loading implemented for optimized performance and reduced initial load time.
    🔹 Data Binding -
              Utilized two-way data binding for dynamic updates between the UI and the component.
              Applied property binding and event binding for efficient communication between the template and logic.
    🔹 Well-Structured Code
              Modular architecture for better scalability and maintainability.
              Followed Angular best practices, such as separating components, services, and modules logically.
              Reusable and dynamic components for a DRY (Don't Repeat Yourself) codebase.

Tech Stack:
        🔹Framework: Angular (17.3.0)
        🔹Language: TypeScript
        🔹CSS Framework: Bootstrap
        🔹Build Tool: Angular CLI
        🔹Hosting: Firebase Hosting
        
Future Improvements:
        🔹Adding unit tests using Jasmine and Karma.
        🔹Integrating state management with NgRx.
        🔹Expanding the app with more features like authentication and API integrations.

Project Structure :

          src/
          ├── app/
          │   ├── components/        # Reusable components
          │   ├── endpoints/         # API endpoint services
          │   ├── interfaces/        # TypeScript interfaces
          │   ├── pages/             # Application pages
          │   ├── modules/           # Feature modules
          │   ├── services/          # Shared services
          │   ├── app-routing.module.ts  # App-level routing
          │   ├── app.module.ts      # Root module
          │   └── app.component.ts   # Root component
          ├── assets/                # Static assets (images, styles, etc.)
          ├── environments/          # Environment configurations
          └── index.html             # Main HTML file

Deployment:
          The application is hosted on Firebase Hosting. You can access the live version at: https://moviewebapp-e287c.web.app/
