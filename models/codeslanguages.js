const Sequelize  = require('sequelize')
const db = require('../config/db')
const Codes = require('./codes')
const Language = require('./languages')



const codes_languages = db.define('CODES_LANGUAGES', {
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

codes_languages.belongsTo(Codes, { foreignKey: 'CODE_ID' });
Codes.hasMany(codes_languages, { foreignKey: 'CODE_ID' }); 

codes_languages.belongsTo(Language, { foreignKey: 'LANGUAGE_ID' });
Language.hasMany(codes_languages, { foreignKey: 'LANGUAGE_ID' }); 



module.exports = codes_languages;