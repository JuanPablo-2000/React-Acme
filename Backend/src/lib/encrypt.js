const bcrypt = require('bcryptjs');

const encryp = {};

encryp.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash(password, salt);
    return pass;
}

encryp.matchPassword = async (password, savedPassword) => {
    try {        
        return await bcrypt.compare(password, savedPassword);        
    } catch (error) {        
        console.log(e);
    }    
}

module.exports = encryp;