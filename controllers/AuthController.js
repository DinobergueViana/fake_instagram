const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login'); 
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    }, 
 
    showHome: (req,res) => {
        res.render('index');
    },

    createPost: (req, res) => {
        res.render('post');
    },

    store: (req, res) => {
        res.json(req.body);
    }

}

module.exports = AuthController;