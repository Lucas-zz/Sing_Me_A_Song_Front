describe("Pages Check", () => {

    beforeEach(cy.clearDatabase);
    afterEach(cy.clearDatabase);

    const url = Cypress.config().baseUrl

    it("should land in home page", () => {
        cy.visit("/");

        cy.contains("Home")
            .click();

        cy.url()
            .should("equal", url + "/")

        cy.end()
    });

    it("should land in top page", () => {
        cy.visit("/");

        cy.contains("Top")
            .click();

        cy.url()
            .should("equal", url + "/top")

        cy.end()
    });

    it("should land in random page", () => {
        cy.visit("/");

        cy.contains("Random").click();

        cy.url().should("equal", url + "/random")

        cy.end()
    });
});