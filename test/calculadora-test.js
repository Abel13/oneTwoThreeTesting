const chai = require("chai");
const calculadora = require("../calculadora/calculadora");

const assert = chai.assert;

describe("Testes de Operações da Calculadora", () => {
  it("Teste: Deve Somar 2 Números", () => {
    assert.equal(calculadora.adicionar(5, 5), 10);
  });
  it("Teste: Deve Subtrair 2 Números", () => {
    assert.equal(calculadora.subtrair(10, 5), 5);
  });
  it("Teste: Deve Multiplicar 2 Números", () => {
    assert.equal(calculadora.multiplicar(10, 5), 50);
  });
  it("Teste: Deve dividir 2 Números", () => {
    assert.equal(calculadora.dividir(18, 2), 9);
  });

  it("Teste: Deve retornar um tipo Number", () => {
    assert.typeOf(calculadora.subtrair(4, 1), "number");
  });

  it("Teste: Deve retornar um numero maior que 7", () => {
    assert.isAbove(calculadora.adicionar(10, 5), 7);
  });

  it("Teste: Deve retornar um numero maior ou igual a 7", () => {
    assert.isAtLeast(calculadora.adicionar(5, 2), 7);
  });

  it("Teste: Deve retornar um numero menor que 10", () => {
    assert.isBelow(calculadora.subtrair(10, 5), 10);
  });
});
