Cypress.Commands.add("clearDatabase", () => {
    cy.request("POST", Cypress.config().apiUrl + `/reset-database`).as("dropDatabase");
});

Cypress.Commands.add("seedRecommendations", () => {
    cy.request("POST", Cypress.config().apiUrl + `/seed/recommendations`).as("seedDatabase");
});