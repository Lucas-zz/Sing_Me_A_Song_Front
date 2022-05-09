describe("videoPlayerCheck", () => {

    beforeEach(cy.seedRecommendations);
    afterEach(cy.clearDatabase);

    it("should display video in the home page", () => {
        cy.visit("/");

        cy.get('article')
            .first()
            .find('iframe')
            .should('be.visible')
            .should('not.be.undefined')
            .end()

    });

    it("should display video in the random page", () => {
        cy.visit("/random");

        cy.get('article')
            .first()
            .find('iframe')
            .should('be.visible')
            .should('not.be.undefined')
            .end()
    });

    it("should display video in the top page", () => {
        cy.visit("/top");

        cy.get('article')
            .first()
            .find('iframe')
            .should('be.visible')
            .should('not.be.undefined')
            .end()
    });
});