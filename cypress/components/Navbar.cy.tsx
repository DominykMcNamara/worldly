import Navbar from "@/app/components/NavBar";

describe("<Navbar />", () => {
  it("Should render and display expected content", () => {
    cy.mount(<Navbar />);
    cy.get("img")
      .should("be.visible")
      .and("have.attr", "alt");
    cy.get("header").should("not.be.empty");
    cy.get("a").should(($a) => {
      expect($a).to.have.attr("href");
      
      let links: JQuery<string> | string[] = $a.map((i, el) => {
        return Cypress.$(el).text();
      });
      links = links.get();
      expect(links).to.have.length(3);
      expect(links).to.deep.eq(["Wordly", "Sign Up", "Sign In"]);
    });
  });
});
