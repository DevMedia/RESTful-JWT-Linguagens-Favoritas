const BlackList = require('../model/BlackList');

const listarToken = token => {
    return BlackList.find({ token }).then(listado => {
        if (!listado.length) {
            const listedToken = new BlackList({ token });
            listedToken.save();
        }
        return true;
    });
};

const checarToken = token => {
    return BlackList.find({ token }).then(listado => listado.length > 0);
};

module.exports = { listarToken, checarToken };
