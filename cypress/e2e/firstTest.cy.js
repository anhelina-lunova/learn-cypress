import { Login } from "./pages/Login";

const loginPage = new Login();

describe("Наш перший блок тестів", () => {
  it("Тест відвідування сайту LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    //
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should(
      "have.css",
      "background-color",
      "rgb(255, 107, 10)"
    );

    //"Знаходимо інпут з поштою та вводимо email"
    cy.get("#user_email").type("user888@gmail.com");

    //"Знаходимо інпут з поштою та вводимо password"
    cy.get("#user_password").type("1234567890");

    //
    cy.contains("Log in").click();
  });

  it("scrollIntoView test", () => {
    // cypress code
    cy.visit(
      "https://docs.cypress.io/api/commands/scrollintoview#docusaurus_skipToContent_fallback"
    );
    cy.get("#Examples").scrollIntoView().should("be.visible");
  });
});

describe("login test", () => {
  it("admin login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("admin", "adminPassword");
  });

  it("user login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user", "userPassword");
  });

  it("manager login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("manager", "managerPassword");
  });
});

describe("Page object example", () => {
  it("login page test", () => {
    // visit page
    cy.visit("https://www.edu.goit.global/account/login");
    // check title
    cy.get(".css-10stgr7 > .css-c1vj7d").should("be.visible");
    cy.get(".css-10stgr7 > .css-c1vj7d").should("have.text", "Login");
    // check inputs
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
    // check button
    cy.get(".eckniwg2").should("be.visible");
    // check link
    cy.get(".css-1f1fv1i > .css-1qrvie4").should("be.visible");
    cy.get(".css-1f1fv1i > .css-1qrvie4").should(
      "have.text",
      "I can't remember the password"
    );
  });
});

describe("Page object example 2", () => {
  it("login page test", () => {
    // visit page
    loginPage.navigate();
    // check title
    loginPage.validateLoginTitle();
    // check inputs
    loginPage.validateInputs();
    // check button
    loginPage.validateButton();
    // check link
    loginPage.validatePasswordLink();
  });
});
