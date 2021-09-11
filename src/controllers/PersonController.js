const Person = require('../models/Person');
const Address = require('../models/Address');

module.exports = {

    async find(req, res) {
        const { id } = req.params;

        try {
            const person = await Person.findByPk(id, {
                include: [
                    {
                        model: Address,
                        as: 'address'
                    }
                ]
            });
            res.json(person);
        } catch (error) {
            console.log(error);
        }
    },

    async list(req, res) {
        try {
            const people = await Person.findAll({
                include: [
                    {
                        model: Address,
                        as: 'address'
                    }
                ]
            });
            res.json(people);
        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res) {
        const { name, age, sex, address } = req.body;

        const found = await Person.findOne({ where: { name: name } });
        if (!found) {
            const createdPerson = await Person.create({
                name,
                age,
                sex
            });

            const createdAddress = await Address.create({
                street: address.street,
                cep: address.cep,
                state: address.state,
                city: address.city,
                personId: createdPerson.id
            });

            res.json(createdPerson);
        }

        res.status(422).send('Already created!');
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
            const found = await Person.findByPk(id);
            await found.destroy();

            res.send('Deleted!');
        } catch (error) {
            console.log(error);
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, age, sex, address } = req.body;

        try {
            const found = await Person.findByPk(id);
            found.name = name;
            found.age = age;
            found.sex = sex;
            found.address = address;

            await found.save();

            res.send('Updated!');
        } catch (error) {
            console.log(error);
        }
    }
}