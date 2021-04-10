module.exports = {
    usuarioLogueado(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }else {
            
        }
    }
};