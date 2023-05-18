describe("httpbin tests", () => {
  it("response code should be 200", () => {
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    url: "https://httpbin.org/non-existing-url",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 405", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    url: "https://httpbin.org/get",
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  it("response value should be value", () => {
    cy.request(request).then((response) => {
      assert.equal("value", response.body.args.key);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it("test that header set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });
});
