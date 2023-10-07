const { Sequelize } = require("sequelize");
const Codes = require('../models/codes')
const Languages = require('../models/languages');
const CodesLanguages = require('../models/codeslanguages');


exports.home = (req, res) =>{
        res.render('home', {
        pageName : 'Home'
        });
}

exports.codes = async(req, res) =>{

        const codes  = await Codes.findAll({ limit: 20 });

        console.log(codes)

        res.render('codes', {
        pageName : 'Codes',
        codes: codes
        });

}


exports.code =  async (req, res) => {
        const code  = await Codes.findOne({where:{id:req.params.id}})
        res.render('code', {
            pageName: 'Watch',
            code:code
        });
    }
    