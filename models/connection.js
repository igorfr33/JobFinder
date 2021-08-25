const Sequelize = require('sequelize')

const sequelize = new Sequelize({

    dialect: 'sqlite',
    storage: './models/app.db'
})

module.exports = sequelize