/** Definición de variables */
const { assert } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);

/** Ruta de Api */
const url = "https://jsonplaceholder.typicode.com";
/** Id usuario utilizado para las pruebas */
const idUsuario = 2;

/** Suite de Pruebas de Post */

/**
 * Prueba Nº1
 * Ingresar un Post(publicación) con el titulo y comentario de un producto
 * utilizando método POST
 */
describe("Pruebas Posts: ", () => {
  it("Crear un Post", (done) => {
    chai
      .request(url)
      .post("/posts")
      .send({
        title: "Audífonos Sony",
        body:
          "Tienen una coloración mínima, son cómodos y de material duradero",
        userId: 1,
      })
      .end(function (err, res) {
        //console.log(res.body);
        expect(res, "Error en la respuesta").to.have.status(201);
        expect(
          res.body,
          "No se encuentra el valor en el Body"
        ).to.have.property("id");
        done();
      });
  });

  /**
   * Prueba Nº2
   * Obtener todos los Posts (publicaciones)
   * utilizando método GET
   */
  it("Obtener todos los Posts", (done) => {
    chai
      .request(url)
      .get("/posts")
      .end(function (err, res) {
        //console.log(res.body);
        expect(res, "Error en la respuesta").to.have.status(200);
        assert.typeOf(res.body, "array", "La respuesta no es un arreglo");
        done();
      });
  });

  /**
   * Prueba Nº3
   * Obtener todos los Posts de un usuario determinado
   * utilizando método GET
   */
  it("Obtener los Posts de un usuario", (done) => {
    chai
      .request(url)
      .get(`/posts/${idUsuario}/comments`)
      .end(function (err, res) {
        //console.log(res.body);
        expect(res, "Error en la respuesta").to.have.status(200);
        assert.lengthOf(res.body, 5, "El usuario no tiene 5 Posts");
        done();
      });
  });

  /**
   * Prueba Nº4
   * Modificar un Post (publicación)
   * utilizando método PUT
   */
  it("Modificar un Post de un usuario", (done) => {
    chai
      .request(url)
      .put(`/posts/${idUsuario}`)
      .send({
        id: 2,
        title: "Samsung s8",
        body: "Resistente, buena cámara, mala bateria",
        userId: idUsuario,
      })
      .end(function (err, res) {
        //console.log(res.body);
        expect(res, "Error en la respuesta").to.have.status(200);
        assert.equal(
          res.body.title,
          "Samsung s8",
          "No se modificó el post del usuario con id " + idUsuario
        );
        done();
      });
  });

  /**
   * Prueba Nº5
   * Eliminar un Post (publicación)
   * utilizando método DELETE
   */
  it("Eliminar un Post de un usuario", (done) => {
    chai
      .request(url)
      .delete(`/posts/${idUsuario}`)
      .end(function (err, res) {
        //console.log(res.body);
        expect(res, "Error en la respuesta").to.have.status(200);
        assert.typeOf(res.body, "object", "La respuesta no es un objeto");
        done();
      });
  });
});
