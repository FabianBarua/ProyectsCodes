const Sequelize  = require('sequelize')
const db = require('../config/db')
const Language = require('./language')

const codes = db.define('codes', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name :  Sequelize.STRING(100),
    desc: Sequelize.TEXT,
    code : Sequelize.TEXT
},
{
    hooks:{
        beforeCreate(code){
            //
        }
    }
});

codes.belongsTo(Language, { foreignKey: 'languageID' });
Language.hasMany(codes, { foreignKey: 'languageID' }); 


module.exports = codes;