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

exports.code = (req, res) => {
        res.render('code', {
            pageName: 'Watch',
            code: `def suma(a, b):
                """
                Calcula la suma de dos números.
        
                Args:
                a (int): El primer número.
                b (int): El segundo número.
        
                Returns:
                int: La suma de los dos números.
                """
                resultado = a + b
                return resultado
        
num1 = 5
num2 = 3
resultado_suma = suma(num1, num2)
print(resultado_suma)
    `
        });
    }
    