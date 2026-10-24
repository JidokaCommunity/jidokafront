import React from 'react'
import Goals from '@/app/components/Goals'

describe("Goals Component", () => {
    beforeEach(() => {
      cy.mount(<Goals />);
    });

    it("should render the Goals component", () => {
      cy.get("h1").should("exist").and("have.text", "Goals");
    });

    it("should have the correct styles", () => {
      cy.get("h1")
        .should("have.class", "text-3xl")
        .and("have.class", "md:text-5xl")
        .and("have.class", "font-jidoka-newsreader");
    });
  });