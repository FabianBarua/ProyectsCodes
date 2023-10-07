const Sequelize  = require('sequelize')
const db = require('../config/db')

const codes = db.define('CODES', {
    CODE_ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    CODE_TITLE :  Sequelize.STRING(100),
    CODE_DESC: Sequelize.TEXT,
    CODE_CODE : Sequelize.TEXT
},
{
    hooks:{
        beforeCreate(code){
            //
        }
    }
});


module.exports = codes;