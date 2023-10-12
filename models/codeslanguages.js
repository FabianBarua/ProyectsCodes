const Sequelize  = require('sequelize')
const db = require('../config/db')
const Codes = require('./codes')
const Language = require('./languages')



const Codes_languages = db.define('CODES_LANGUAGES', {
    ID_CODELANGUAGE : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
{
    hooks:{
        beforeCreate(code){
            //
        }
    }
});

Codes_languages.belongsTo(Codes, { foreignKey: 'CODE_ID' });
Codes.hasMany(Codes_languages, { foreignKey: 'CODE_ID' }); 

Codes_languages.belongsTo(Language, { foreignKey: 'LANGUAGE_ID' });
Language.hasMany(Codes_languages, { foreignKey: 'LANGUAGE_ID' }); 



module.exports = Codes_languages;