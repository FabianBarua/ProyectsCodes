exports.home = (req, res) =>{
        res.render('home', {
        pageName : 'Home'
        });
}
exports.codigos = (req, res) =>{
        res.render('codigos', {
        pageName : 'Codes'
        });
}

exports.code = (req, res) =>{
        res.render('code', {
        pageName : 'Watch'
});
}