const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('projeto01', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

const adicionarCliente = async (nome, sobrenome, idade) => {
    const clienteData = {
        nome: `${nome} ${sobrenome}`,
        endereco: 'Endereço padrão',
        bairro: 'Bairro padrão',
        cep: '00000-000',
        telefone: '1111-1111',
        celular: '99999-9999'
    };
    const resultado = await Cliente.create(clienteData);
    return resultado;
};

sequelize.sync({ force: true }).then(async () => {
    console.log('Banco de dados sincronizado e modelo Cliente criado.');
    await adicionarCliente('João', 'Silva', 30);
    await adicionarCliente('Scarlet', 'Elizabeth', 23);
    await adicionarCliente('Ethan', 'Moretti', 25);
    console.log('Três clientes adicionados ao banco de dados.');
});

module.exports = { adicionarCliente };
