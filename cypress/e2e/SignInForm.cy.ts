describe("<SignInForm />", () => {
    it("Should navigate to the Login page", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get('[cy-data="sign-up-link"]').click();
      cy.url().should("include", "/signup");
    });
  });
  describe("Logging in", () => {
    before(() => {
      cy.task("resetDB");
      cy.task("seedDB");
      cy.createUser("lady", "McNamara", "lady@lady.com", "lady", "lady");
      cy.login("bmo@gmail.com", "bmo");
    });
    it("should take the user to their profile page", () => {
      cy.getCookie("next-auth.callback-url").should("exist");
     
    });
  });
  