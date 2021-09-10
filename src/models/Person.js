const Sequelize = require('sequelize');
const database = require('../configs/db');

const Address = require('./Address');

const Person = database.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Person.hasOne(Address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Address.belongsTo(Person);

module.exports = Person;