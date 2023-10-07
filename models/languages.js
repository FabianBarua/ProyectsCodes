const Sequelize  = require('sequelize')
const db = require('../config/db')


const language  = db.define('LANGUAGES', {
    LANGUAGE_ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    LANGUAGE_TITLE :  Sequelize.STRING(100),
    LANGUAGE_PATH :  Sequelize.STRING(100),
}
);

module.exports = language;