/// <reference types="cypress" />
export {};
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add(
    "createUser",
    (
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      password: string
    ) => {
      cy.visit("http://localhost:3000/signup");
      cy.get('[cy-data="firstName"]').focus()
      cy.get('[cy-data="firstName"]').type(firstName);
      cy.get('[cy-data="lastName"]').focus()
      cy.get('[cy-data="lastName"]').type(lastName);
      cy.get('[cy-data="email"]').focus();
      cy.get('[cy-data="email"]').type(email);
      cy.get('[cy-data="username"]').focus();
      cy.get('[cy-data="username"]').type(username);
      cy.get('[cy-data="password"]').focus();
      cy.get('[cy-data="password"]').type(password);
      cy.get('[cy-data="signup-button"]').click();
      //cy.url().should("include", "/login");
    }
  );
  
  Cypress.Commands.add("login", (email: string, password: string) => {
    cy.visit("http://localhost:3000/login");
    cy.get('[cy-data="login-email"]').focus()
    cy.get('[cy-data="login-email"]').type(email);
    cy.get('[cy-data="login-password"]').type(password);
    cy.get('[cy-data="login-button"]').click();
    
   
  });
  
  declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        createUser(
          firstName: string,
          lastName: string,
          email: string,
          username: string,
          password: string
        ): Chainable;
  
        login(email: string, password: string): Chainable;
      }
    }
  }
  