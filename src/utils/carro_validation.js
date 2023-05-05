const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    id: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    update,
    get,
    deleteBy,
};