const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        marca: "Fiat",
        ano: 2019,
        cor: "Vermelho"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro marca', () => {
    const result = Validation.create({
        ano: 2020,
        cor: "Prata"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        marca: "Citroen",
        cor: "Branco"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro cor', () => {
    const result = Validation.create({
        marca: "Honda",
        ano: 2014
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});