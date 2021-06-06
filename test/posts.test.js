let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "https://jsonplaceholder.typicode.com";

/** Suite de Pruebas de Post. */
describe("Pruebas Posts: ", () => {
  it("Crear un Post", (done) => {
    chai
      .request(url)
      .post("/posts")
      .send({ title: "test", body: "bar", userId: 1 })
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('id');
        done();
      });
  });
  
});
