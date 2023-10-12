const { Sequelize } = require("sequelize");
const Codes = require('../models/codes')
const Languages = require('../models/languages');
const CodesLanguages = require('../models/codeslanguages');

exports.codes = async(req, res) =>{
        const codes = await Codes.findAll({ 
                include: [{
                  model: CodesLanguages,
                  attributes: ['ID_CODELANGUAGE'],
                  include: {
                    model: Languages,
                    attributes: ['LANGUAGE_TITLE', 'LANGUAGE_PATH'],
                  },
                }]
        });


        console.log(JSON.stringify(codes, null, 2))
        
        res.render('codes', {
        pageName : 'Codes',
        codes: codes
        });

}

exports.home = (req, res) =>{
        res.render('home', {
        pageName : 'Home'
        });
}

exports.code =  async (req, res) => {

        const code  = await Codes.findOne({where:{CODE_ID:req.params.id}})
        
        res.render('code', {
            pageName: 'Watch',
            code:code
        });
    }
    