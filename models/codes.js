const Sequelize  = require('sequelize')
const db = require('../config/db')

const codes = db.define('codes', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name :  Sequelize.STRING(100),
    desc: Sequelize.TEXT,
    code : Sequelize.TEXT,
    language : Sequelize.STRING(100)
},
{
    hooks:{
        beforeCreate(code){
            //
        }
    }
});


module.exports = codes;