const Sequelize  = require('sequelize')
const db = require('../config/db')


const language  = db.define('language', {
    name: Sequelize.STRING,
}
);


module.exports = language;