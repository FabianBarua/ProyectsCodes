const { Sequelize } = require("sequelize");
const Codes = require('../models/codes')
const fs = require('fs');
const path = require('path');
const language = require('../models/language'); // Asegúrate de importar el modelo Language desde donde esté ubicado




exports.home = (req, res) =>{
        res.render('home', {
        pageName : 'Home'
        });
}

exports.codes = async(req, res) =>{

        /* 

        test para creara un lenguaje

        const [, created] = await language.findOrCreate({

            where:{name: 'JavaScript'},

          });

        console.log(created)
        */
        const codes  = await Codes.findAll()

        const images = codes.map((item) => {
        const languages = item.language.split('-');
        const rowImages = languages.map((language) => {
                const imagePath = path.join('public', 'img', 'SVG', `${language.toLowerCase()}.svg`);
                return fs.existsSync(imagePath) ? 1 : 0;
        });
        return rowImages;
        });

        res.render('codigos', {
        pageName : 'Codes',
        codes: codes,
        images: images
        });
}


exports.code =  async (req, res) => {
        const code  = await Codes.findOne({where:{id:req.params.id}})
        res.render('code', {
            pageName: 'Watch',
            code:code
        });
    }
    