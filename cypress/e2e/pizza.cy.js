describe("", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });
  it("Clicks on a food card and navigates to order page", () => {
    cy.get(".foodCard").first().click();

    cy.url().should("include", "/order");
  });

  it("should enter a name in the input field", () => {
    cy.get(".foodCard").first().click();
    cy.url().should("include", "/order");

    const name = "John Doe";

    cy.get('input[type="text"]').type(name);

    cy.get('input[type="text"]').should("have.value", name);
  });
  it("should select dough type", () => {
    cy.get(".foodCard").first().click();
    cy.url().should("include", "/order");
    const hamur = "ince";

    cy.get('select[name="weight"]').select(hamur);

    cy.get('select[name="weight"]').should("have.value", hamur);
  });
  it("should select pizza size", () => {
    cy.get(".foodCard").first().click();
    cy.url().should("include", "/order");
    const pizzaSize = "M";

    cy.get('input[type="radio"][value="' + pizzaSize + '"]')
      .scrollIntoView()
      .check({ force: true });

    cy.get('input[type="radio"][value="' + pizzaSize + '"]').should(
      "be.checked"
    );
  });
  it("should select multiple ingredients", () => {
    cy.get(".foodCard").first().click();
    cy.url().should("include", "/order");

    const Selected = ["Soy Sauce", "Noodles", "Chicken", "Chicken Broth"];

    Selected.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });

      cy.get('input[type="checkbox"][value="' + ingredient + '"]').should(
        "be.checked"
      );
    });
  });
  it('should submit the form when clicking "SİPARİŞ VER" button', () => {
    cy.get(".foodCard").first().click();
    cy.url().should("include", "/order");

    cy.get('input[type="text"]').type("John Doe");

    const ingredientsToSelect = [
      "Soy Sauce",
      "Noodles",
      "Chicken",
      "Chicken Broth",
    ];
    ingredientsToSelect.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });
    });

    cy.get('select[name="weight"]').select("İnce");

    cy.get('input[type="radio"][value="M"]')
      .check({ force: true })
      .scrollIntoView();

    cy.get(".siparisButon").click({ force: true });

    cy.url().should("include", "/success");
  });
});
