const decorateControler = (func) => {
    const foo = async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            next(error);
        }
    };
    return foo;
};

module.exports = decorateControler;