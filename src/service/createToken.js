export const createToken = () => {
    var jwt = require('jsonwebtoken');
    var token = jwt.sign(
            {
                iss : "http://t3h-edu.herokuapp.com/",
			    aud : "http://t3h-edu.herokuapp.com/",
			    iat: 1356999524,
                nbf: 1357000000
            }, 'thuc_tap_vccorp_2020')
    return token
}