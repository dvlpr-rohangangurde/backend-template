const morgan = require("morgan");

const morganMiddleware = (logger) => (req, res, next) => {
    const stream = {
        write: (message) => {
            logger.info(message.trim());
        },
    };

   
    morgan("tiny", { stream })(req, res, next);
};



module.exports = morganMiddleware;