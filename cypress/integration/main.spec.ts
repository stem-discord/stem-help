/// <reference types="cypress" />

const PORT = process.env.PORT || 3000;

describe(`Test`, () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`);
  });

  it(`works`, () => {
    cy.wait(500) // wait for the JS to load
      .get(`h1`)
      .should(`exist`)
      .should(`contain`, `Hello`);
  });
});
