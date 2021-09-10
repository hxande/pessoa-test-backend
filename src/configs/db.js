const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://pgyyqrgfboktde:34c6e2269cfb57a77a010511861f07f4c88a52696fa06bfd55245290d60ed208@ec2-52-3-130-181.compute-1.amazonaws.com:5432/df5p1ub6cfq2ms',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;