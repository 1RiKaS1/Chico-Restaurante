// Erros globais
exports.globalErrorsMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    next();
};

exports.globalSuccessMiddleware = (req, res, next) => {
    res.locals.success = req.flash('success');
    next();
};

