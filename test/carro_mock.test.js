const Carros = require('../src/application/carro_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarrosRepository = require('../src/port/carro_repository');

jest.mock('../src/port/carro_repository');

it('CREATE - Dado válido', async () => {
    const data = {
        marca: "Chevrolet",
        ano: 2020,
        cor: "Preto"
    }

    const id = Utils.generateUuid();

    CarrosRepository.create.mockResolvedValue({ ...data, id });

    const result = await Carros.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        marca: "Chevrolet",
        ano: 2020,
        cor: "Preto"
    }

    const id = Utils.generateUuid();

    CarrosRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Carros.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})