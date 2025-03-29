import React from 'react'
import Vision from '@/app/components/Vision'

describe("Vision Component", () => {
    beforeEach(() => {
      cy.mount(<Vision />);
    });
  
    it("should render the Vision component", () => {
      cy.get("h1").should("exist").and("have.text", "Visión");
    });
  
    it("should have the correct styles", () => {
      cy.get("h1")
        .should("have.class", "text-6xl")
        .and("have.class", "text-center")
        .and("have.class", "font-jidoka-newsreader");
    });
  });