const { Sequelize } = require("sequelize");
const Codes = require('../models/codes')


exports.home = (req, res) =>{
        res.render('home', {
        pageName : 'Home'
        });
}

exports.codes = async(req, res) =>{
        const codes  = await Codes.findAll()
        res.render('codigos', {
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
    