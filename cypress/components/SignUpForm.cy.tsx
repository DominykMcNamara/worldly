/* import SignUpForm from "@/app/components/SignUpForm";

describe("<SignupForm />", () => {
    beforeEach(() => {
      cy.mount(<SignUpForm />)
    })
    it("Should render and display expected content", () => {
      cy.get("form").should("not.be.empty");
      cy.get("input")
        .should("to.be.empty")
        .and(($input) => {
          expect($input).to.have.length(8);
          expect($input).to.have.attr("type");
        });
        cy.get("label")
        .should("not.be.empty")
        .and(($label) => {
          expect($label).to.have.length(10);
        });
      cy.get("button").should("have.attr", "type");
    });
  });
  
  */