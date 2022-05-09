
describe("addAndVoteCheck", () => {

    beforeEach(cy.clearDatabase);

    const ytVideoName = "Silver For Monsters... - The Witcher 3 OST";
    const ytVideoLink = "https://www.youtube.com/watch?v=jRG0gyVFP60";
    const ytLikes = 42069;

    it("should add and persist a recommendation in the home page", () => {
        cy.visit("/");

        cy.get('input')
            .first()
            .type(ytVideoName)

        cy.get('input')
            .last()
            .type(ytVideoLink)

        cy.get('button')
            .click()

        cy.contains(ytVideoName)
            .should('not.be.undefined')
            .should("be.visible")

        cy.reload()

        cy.contains(ytVideoName)
            .should('not.be.undefined')
            .should("be.visible")

        cy.end()
    });

    it("should like a video and persist it", () => {

        cy.seedRecommendations()

        cy.visit("/");
        cy.get('article')
            .first()
            .find('svg')
            .first()
            .click();

        cy.contains(`${ytLikes + 1}`)
            .should('not.be.undefined')

        cy.reload()
        cy.contains(`${ytLikes + 1}`)
            .should('not.be.undefined')

        cy.end()
    });

    it("should dislike a video and persist it", () => {

        cy.seedRecommendations()

        cy.visit("/");
        cy.get('article')
            .first()
            .find('svg')
            .last()
            .click()

        cy.contains(`${ytLikes - 1}`)
            .should('not.be.undefined')

        cy.reload()
        cy.contains(`${ytLikes - 1}`)
            .should('not.be.undefined')

        cy.end()
    });
});